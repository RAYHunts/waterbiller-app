import { useAuth } from "@/context/auth-context";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, Text, View } from "react-native";
import { Appearance, useColorScheme } from "react-native";

export default function Profile() {
  const { user, profile, signOut } = useAuth();
  const router = useRouter();

  const handleLogOut = () => {
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
            await signOut();
          },
          style: "destructive",
        },
      ],
      { cancelable: true },
    );
  };

  return (
   <View>
    <Text>
      {user?.email}
    </Text>
   </View>
  );
}
