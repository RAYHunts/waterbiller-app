import { Text, View } from "react-native";

import { useSession } from "@/src/context/auth-context";
import { Button, ButtonText } from "@/src/components/ui/button";
import { Link } from "expo-router";

export default function Index() {
  const { signOut, session } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button onPress={signOut}>
        <ButtonText>Sign Out</ButtonText>
      </Button>
      <Text>Home</Text>
      <Link href={"/about"}>About</Link>
      <Link href={"/sign-in"}>Sign In</Link>
      <Link href={"/sign-up"}>Sign Up</Link>
      <Text>{session ? `Signed in as ${session}` : "Not signed in"}</Text>
    </View>
  );
}
