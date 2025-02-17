import React, { useRef, useState } from "react";
import { Box } from "@components/ui/box";
import { HStack } from "@components/ui/hstack";
import {
  AlertCircleIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  EditIcon,
  Icon,
  MenuIcon,
  PhoneIcon,
  SettingsIcon,
} from "@components/ui/icon";
import { Text } from "@components/ui/text";
import { VStack } from "@components/ui/vstack";
import { Pressable } from "@components/ui/pressable";
import { AlertCircle, type LucideIcon } from "lucide-react-native";
import { Button, ButtonIcon, ButtonText } from "@components/ui/button";
import { Heading } from "@components/ui/heading";
import { ScrollView } from "@components/ui/scroll-view";
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
} from "@components/ui/modal";
import { Input, InputField } from "@components/ui/input";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@components/ui/avatar";
import { SafeAreaView } from "@components/ui/safe-area-view";
import { Center } from "@components/ui/center";
import { cn } from "@gluestack-ui/nativewind-utils/cn";
import { Keyboard, Platform } from "react-native";
import { Divider } from "@components/ui/divider";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@components/ui/form-control";
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@components/ui/select";
import { isWeb } from "@gluestack-ui/nativewind-utils/IsWeb";
import { useRouter } from "expo-router";
import { useSession } from "@/src/context/auth-context";

export default function Profile() {
  const { user, profile } = useSession();
  if (Platform.OS === "web") {
    console.log("profile", profile);
    console.log("user", user);
  }

  const router = useRouter();

  return (
    <SafeAreaView>
      <ScrollView>
        <VStack>
          <Heading>Profile</Heading>
          <VStack>
            <Avatar size="lg">
              <AvatarImage
                source={{
                  uri: "https://avatars.githubusercontent.com/u/682703?v=4",
                }}
              />
            </Avatar>
            <Text>{profile?.first_name}</Text>
            <Text>{user?.user_metadata?.first_name}</Text>
          </VStack>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
