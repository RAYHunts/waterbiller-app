import { Button, Platform, Text, Touchable, View } from "react-native";
import { useAuth } from "@/context/auth-context";
import { Link } from "expo-router";
import ReactMap from "@/components/maps";

export default function Index() {
  const { signOut, session, profile } = useAuth();
  // const Map = Platform.OS === "web"
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      className="dark:bg-gray-800"
    >

      {profile?.role === "admin" && <ReactMap />}
      <Text>
        {session ? `Signed in as ${session.user.email}` : "Not signed in"}
      </Text>
    </View>
  );
}
