// src/context/auth-context.tsx
import {
  useContext,
  createContext,
  type PropsWithChildren,
  useEffect,
  useState,
} from "react";
import {
  AuthApiError,
  AuthResponse,
  Session,
  User,
  UserResponse,
} from "@supabase/supabase-js";
import { supabase } from "../utils/supabase";
import { Alert } from "react-native";
import { makeRedirectUri } from "expo-auth-session";

import * as QueryParams from "expo-auth-session/build/QueryParams";
import * as WebBrowser from "expo-web-browser";
import { router } from "expo-router";
import { useStorageState } from "../hooks/useStorageStage";

WebBrowser.maybeCompleteAuthSession(); // required for web only
const redirectTo = makeRedirectUri();

type Profile = {
  id: string;
  first_name: string;
  last_name: string;
  role: string;
  avatar_url: string;
  created_at: string;
  updated_at: string;
};

const AuthContext = createContext<{
  signIn: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
  createSessionFromUrl: (url: string) => void;
  performOAuth: () => void;
  sendMagicLink: (email: string) => void;
  signOut: () => void;
  session?: Session | null;
  user: User | null;
  profile: Profile | null;
  isLoading: boolean;
}>({
  signIn: async () => {},
  signUp: async () => {},
  createSessionFromUrl: async () => {},
  performOAuth: async () => {},
  sendMagicLink: async () => {},
  signOut: async () => {},
  profile: null,
  session: null,
  user: null,
  isLoading: false,
});

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);

  const parseSession = (session: string) => {
    if (!session) return { access_token: "", refresh_token: "" };
    return JSON.parse(session) as Session;
  };

  // setSession on reload
  useEffect(() => {
    if (isLoading) return;

    const { access_token, refresh_token } = parseSession(session as string);
    const refreshSession = async () => {
      const { data, error } = await supabase.auth.setSession({
        access_token,
        refresh_token,
      });
      if (data.session) {
        setSession(JSON.stringify(data.session));
      }
    };

    if (session) {
      refreshSession();
    }
  }, [isLoading]);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) {
        Alert.alert("Error getting user", error.message);
        console.error("Error getting user", error.message);
      }
      const { data: profile, error: profileError } = await supabase
        .schema("public")
        .from("profiles")
        .select("*")
        .eq("id", user?.id)
        .single();
      if (profileError) {
        Alert.alert("Error getting profile", profileError.message);
        console.error("Error getting profile", profileError.message);
      }
      setProfile(profile);
      setUser(user);
    };
    if (session) {
      fetchUser();
    }
  }, [session]);

  const signIn = async (email: string, password: string) => {
    const {
      data: { session, user },
      error,
    } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);

    if (session) {
      setSession(JSON.stringify(session));
    }
    Alert.alert("Signed in successfully!", user?.email);
    router.push("/"); // Redirect to main route after sign-in
  };

  const signUp = async (email: string, password: string) => {
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
  };

  const createSessionFromUrl = async (url: string) => {
    const { params, errorCode } = QueryParams.getQueryParams(url);

    if (errorCode) throw new Error(errorCode);
    const { access_token, refresh_token } = params;

    if (!access_token) return;

    const { data, error } = await supabase.auth.setSession({
      access_token,
      refresh_token,
    });
    if (error) throw error;
    setSession(data.session ? JSON.stringify(data.session) : null);
  };

  const performOAuth = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo,
        skipBrowserRedirect: true,
      },
    });
    if (error) throw error;

    const res = await WebBrowser.openAuthSessionAsync(
      data?.url ?? "",
      redirectTo,
    );

    if (res.type === "success") {
      const { url } = res;
      await createSessionFromUrl(url);
    }
  };

  const sendMagicLink = async (email: string) => {
    const { error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: redirectTo,
      },
    });

    if (error) throw error;
    Alert.alert("Magic link sent to your email!");
  };

  const signOut = async () => {
    Alert.alert(
      "Log out",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Log Out",
          onPress: async () => {
            const { error } = await supabase.auth.signOut();
            if (error) {
              Alert.alert("Error logging out", error.message);
              return;
            }
            setSession(null);
            setUser(null);
            router.push("/sign-in");
          },
          style: "destructive",
        },
      ],
      { cancelable: true },
    );
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        createSessionFromUrl,
        performOAuth,
        sendMagicLink,
        signOut,
        user,
        session: session ? JSON.parse(session) : null,
        isLoading,
        profile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useSession() {
  return useContext(AuthContext);
}
