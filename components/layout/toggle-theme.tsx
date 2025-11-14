"use client";

import { FC } from "react";
import { SwitchTheme } from "@/components/ui/switch-theme";
import { useTheme } from "next-themes";

interface ToggleThemeProps {}

export const ToggleTheme: FC<ToggleThemeProps> = ({}) => {
  const { theme, setTheme } = useTheme();

  return (
    <SwitchTheme
      checked={theme === "dark"}
      onCheckedChange={(checked) => {
        setTheme(checked ? "dark" : "light");
      }}
    />
  );
};
