import { Slot } from "expo-router";
import { GluestackUIProvider } from "../components/ui/gluestack-ui-provider";
// Import your global CSS file
import "@/src/styles/global.css";
import { SessionProvider } from "../context/auth-context";
import { Appearance, useColorScheme } from "react-native";

export default function Root() {
  return (
    <SessionProvider>
      <GluestackUIProvider>
        <Slot />
      </GluestackUIProvider>
    </SessionProvider>
  );
}
