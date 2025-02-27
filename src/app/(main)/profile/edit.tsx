import { Text, View } from "react-native";

import { useAuth } from "@/context/auth-context";
import { router } from "expo-router";

export default function ProfileEdit() {
  const { signOut, user } = useAuth();
  return (
    <View>
      <Text>{user?.email}</Text>
    </View>
  );
}
