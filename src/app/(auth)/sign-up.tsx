// src/app/(auth)/sign-up.tsx
import { router } from "expo-router";
import { Alert, AppState, Text, View } from "react-native";

import { useSession } from "@/src/context/auth-context";
import { Button, ButtonText } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";

import { Input, InputField, InputIcon, InputSlot } from "@components/ui/input";
import { useForm } from "@tanstack/react-form";
import { EyeIcon, EyeOffIcon, LockIcon } from "@/src/components/ui/icon";
import { useState } from "react";
import { supabase } from "@/src/utils/supabase";

type SignUpPayload = {
  email: string;
  password: string;
};

export default function SignUp() {
  const { signUp } = useSession();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      c_password: "",
    },
    onSubmit: async (payload) => {
      if (payload.value.password !== payload.value.c_password) {
        Alert.alert("Password does not match");
        return;
      }
      await signUp(payload.value.email, payload.value.password);
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
        <form.Field
          name="c_password"
          children={(field) => (
            <Input className="my-1">
              <InputField
                type={showPassword ? "text" : "password"}
                placeholder="confirm password"
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
          <ButtonText>Sign Up</ButtonText>
        </Button>
      </Card>
    </View>
  );
}
