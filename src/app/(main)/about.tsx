import { Text, View } from "react-native";

import { useSession } from "@/src/context/auth-context";
import { Button, ButtonText } from "@/src/components/ui/button";
import { Link } from "expo-router";

export default function About() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>About</Text>
      <Link href={"/(main)"}>Home</Link>
    </View>
  );
}
