import { FC } from "react";
import { ToggleSidebar } from "@/components/layout/toggle-sidebar";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <ToggleSidebar className="md:hidden" />
    </header>
  );
};
