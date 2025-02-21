import { Platform, Text, View } from "react-native";
import { useSession } from "@/src/context/auth-context";
import { Button, ButtonText } from "@/src/components/ui/button";
import { Link } from "expo-router";
import ReactMap from "@/src/components/maps";

export default function Index() {
  const { signOut, session, profile } = useSession();
  // const Map = Platform.OS === "web"
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      className="dark:bg-gray-800"
    >
      <Button onPress={signOut}>
        <ButtonText>Sign Out</ButtonText>
      </Button>

      {profile?.role === "admin" && <ReactMap />}
      <Text>
        {session ? `Signed in as ${session.user.email}` : "Not signed in"}
      </Text>
    </View>
  );
}
