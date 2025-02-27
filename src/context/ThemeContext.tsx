import React, { createContext, useContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";

const lightTheme = {
  colors: {
    primary: "#0066CC",
    secondary: "#6B7280",
    background: "#FFFFFF",
    surface: "#F3F4F6",
    text: "#1F2937",
    border: "#E5E7EB",
    error: "#DC2626",
    success: "#059669",
    warning: "#D97706",
  },
};

const darkTheme = {
  colors: {
    primary: "#60A5FA",
    secondary: "#9CA3AF",
    background: "#1F2937",
    surface: "#374151",
    text: "#F9FAFB",
    border: "#4B5563",
    error: "#EF4444",
    success: "#34D399",
    warning: "#FBBF24",
  },
};

const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
  isDark: false,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === "dark");

  useEffect(() => {
    setIsDark(colorScheme === "dark");
  }, [colorScheme]);

  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
