import { Slot, Stack } from "expo-router";
import { GluestackUIProvider } from "../components/ui/gluestack-ui-provider";
// Import your global CSS file
import "@/src/styles/global.css";
import { SessionProvider } from "../context/auth-context";
import { Appearance, useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function Root() {
  let colorScheme = useColorScheme();
  const [colorMode, setColorMode] = useState<"light" | "dark">("light");

  return (
    <SessionProvider>
      <GluestackUIProvider mode={"system"}>
        <Slot />
      </GluestackUIProvider>
      <StatusBar style={"dark"} />
    </SessionProvider>
  );
}
