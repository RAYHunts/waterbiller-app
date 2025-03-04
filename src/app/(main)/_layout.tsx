import { Text } from "react-native";
import { Redirect, Stack, Tabs } from "expo-router";

import { View } from "react-native";
import { useAuth } from "@/context/auth-context";
import LoadingScreen from "@/components/screen/Loading";

export default function AppLayout() {
  const { session, isLoading } = useAuth();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <LoadingScreen />
      </View>
    );
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/sign-in" />;
  }

  // This layout can be deferred because it's not the root layout.
  return (
    <Tabs screenOptions={{}}>
      <Tabs.Screen
        name="(dashboard)/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Text style={{ color }}>🏠</Text>,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <Text style={{ color }}>👤</Text>,
        }}
      />
    </Tabs>
  );
}
