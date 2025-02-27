import { Slot, Stack } from "expo-router";
import { AuthProvider } from "@/context/auth-context";
import { Appearance, useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Root() {
  let colorScheme = useColorScheme();
  const [colorMode, setColorMode] = useState<"light" | "dark">("light");

  return (
    <ThemeProvider>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(main)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      </AuthProvider>
    </ThemeProvider>
  );
}
