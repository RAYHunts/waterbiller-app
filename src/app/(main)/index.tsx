import { Text, View } from "react-native";

import { useSession } from "@/src/context/auth-context";
import { Button, ButtonText } from "@/src/components/ui/button";

export default function Index() {
  const { signOut } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button onPress={signOut}>
        <ButtonText>Sign Out</ButtonText>
      </Button>
    </View>
  );
}
