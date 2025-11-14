import { FC } from "react";
import { ToggleSidebar } from "@/components/layout/toggle-sidebar";
import { ToggleAvatar } from "@/components/layout/toggle-avatar";
import { AddBookmark } from "@/components/layout/add-bookmark";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="h-20 px-8 py-4 flex items-center justify-between">
      <ToggleSidebar className="md:hidden" />
      <div className="flex items-center gap-4">
        <AddBookmark />
        <ToggleAvatar />
      </div>
    </header>
  );
};
