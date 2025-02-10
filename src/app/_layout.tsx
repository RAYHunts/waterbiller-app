import { Slot, Stack } from "expo-router";
import { GluestackUIProvider } from "../components/ui/gluestack-ui-provider";
// Import your global CSS file
import "@/src/styles/global.css";
import { SessionProvider } from "../context/auth-context";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Root() {
  const colorScheme = useColorScheme();
  const mode = colorScheme === "dark" ? "dark" : "light";

  return (
    <SessionProvider>
      <GluestackUIProvider mode={mode}>
        <Slot />
      </GluestackUIProvider>
      <StatusBar style="auto" />
    </SessionProvider>
  );
}
