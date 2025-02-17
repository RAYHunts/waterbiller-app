import { Text, View } from "react-native";

import { useSession } from "@/src/context/auth-context";
import { Button, ButtonText } from "@/src/components/ui/button";
import { router } from "expo-router";

export default function ProfileEdit() {
  const { signOut, user } = useSession();
  return (
    <View>
      <Text>{user?.email}</Text>
      <Button onPress={() => router.push("/profile")}>
        <ButtonText>Cancel</ButtonText>
      </Button>
    </View>
  );
}
