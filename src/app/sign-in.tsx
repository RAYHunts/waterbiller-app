import { router } from "expo-router";
import { Text, View } from "react-native";

import { useSession } from "@/src/context/auth-context";
import { Button, ButtonText } from "../components/ui/button";

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace("/");
        }}
      >
        <ButtonText>Sign In</ButtonText>
      </Button>
    </View>
  );
}
