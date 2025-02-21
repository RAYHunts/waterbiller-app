import React from "react";
import { SafeAreaView } from "@components/ui/safe-area-view";
import { ScrollView } from "@components/ui/scroll-view";
import { VStack } from "@components/ui/vstack";
import { HStack } from "@components/ui/hstack";
import { Avatar, AvatarImage } from "@components/ui/avatar";
import { Text } from "@components/ui/text";
import { Heading } from "@components/ui/heading";
import { Button, ButtonText } from "@components/ui/button";
import { Card } from "@/src/components/ui/card";
import { useRouter } from "expo-router";
import { useSession } from "@/src/context/auth-context";
import { Alert } from "react-native";
import { Appearance, useColorScheme } from "react-native";

export default function Profile() {
  const { user, profile, signOut } = useSession();
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
    <SafeAreaView>
      <ScrollView>
        <Card>
          <VStack>
            <Heading>Profile</Heading>
            <HStack>
              <Avatar size="lg">
                <AvatarImage
                  source={{
                    uri: "https://avatars.githubusercontent.com/u/682703?v=4",
                  }}
                />
              </Avatar>
              <VStack>
                <Text>{profile?.first_name}</Text>
                <Text>{user?.email}</Text>
              </VStack>
            </HStack>

            <Button onPress={() => router.replace("/profile/edit")}>
              <ButtonText>Edit</ButtonText>
            </Button>
          </VStack>
        </Card>

        <Card>
          <VStack>
            <Heading>Settings</Heading>
            <Button onPress={() => router.replace("/profile")}>
              <ButtonText>Profile</ButtonText>
            </Button>
            <Button onPress={() => router.replace("/meter-devices/index")}>
              <ButtonText>Meter Device</ButtonText>
            </Button>
            <Button
              onPress={() => {
                const colorScheme = Appearance.getColorScheme();
                const newScheme = colorScheme === "dark" ? "light" : "dark";
                Appearance.setColorScheme(newScheme);
              }}
            >
              <ButtonText>Switch Theme</ButtonText>
            </Button>
            <Button onPress={handleLogOut}>
              <ButtonText>Log Out</ButtonText>
            </Button>
          </VStack>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
