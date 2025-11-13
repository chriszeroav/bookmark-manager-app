import { FC } from "react";
import { Button } from "@/components/shadcn/button";
import { MenuIcon } from "@/components/icons";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/shadcn/drawer";
import { Menu } from "@/components/layout/menu";

interface ToggleSidebarProps {
  className?: string;
}

export const ToggleSidebar: FC<ToggleSidebarProps> = ({ className }) => {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button className={className}>
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="sr-only">
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <Menu />
      </DrawerContent>
    </Drawer>
  );
};
