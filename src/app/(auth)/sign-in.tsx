// src/app/(auth)/sign-in.tsx
import { router } from "expo-router";
import { AppState, Text, View } from "react-native";

import { useSession } from "@/src/context/auth-context";
import { Button, ButtonText } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input, InputField, InputIcon, InputSlot } from "@components/ui/input";
import { useForm } from "@tanstack/react-form";
import { EyeIcon, EyeOffIcon, LockIcon } from "../../components/ui/icon";
import { useState } from "react";
import * as Linking from "expo-linking";
import { supabase } from "@/src/utils/supabase";

type SignInPayload = {
  email: string;
  password: string;
};

export default function SignIn() {
  const { signIn, createSessionFromUrl, performOAuth, sendMagicLink } =
    useSession();
  const [showPassword, setShowPassword] = useState(false);

  const url = Linking.useURL();
  if (url) createSessionFromUrl(url);

  const form = useForm<SignInPayload>({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async (payload) => {
      const response = await signIn(
        payload.value.email,
        payload.value.password,
      );
    },
  });

  const handleHide = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Card variant="elevated" className="flex w-80 flex-col gap-3">
        <form.Field
          name="email"
          children={(field) => (
            <Input className="my-1">
              <InputField
                type="text"
                placeholder="email"
                value={field.state.value}
                onChangeText={field.handleChange}
              />
            </Input>
          )}
        />
        <form.Field
          name="password"
          children={(field) => (
            <Input className="my-1">
              <InputField
                type={showPassword ? "text" : "password"}
                placeholder="password"
                value={field.state.value}
                onChangeText={field.handleChange}
              />
              <InputSlot onPress={handleHide}>
                <InputIcon>
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </InputIcon>
              </InputSlot>
            </Input>
          )}
        />
        <Button onPress={form.handleSubmit}>
          <ButtonText>Sign In</ButtonText>
        </Button>
      </Card>
    </View>
  );
}
