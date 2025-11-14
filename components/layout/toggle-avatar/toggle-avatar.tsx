import { FC } from "react";
import { Button } from "@/components/shadcn/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/avatar";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { PaletteIcon } from "@/components/icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/popover";
import { ToggleTheme } from "@/components/layout/toggle-theme";
import { Logout } from "./logout";

interface ToggleAvatarProps {}

export const ToggleAvatar: FC<ToggleAvatarProps> = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/login");

  const avatarFallback =
    session.user.name
      .split(" ")
      .map((n) => n[0])
      .join("") || [];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="avatar">
          <Avatar>
            <AvatarImage
              src={session.user.image ?? undefined}
              alt={session.user.name ?? "Avatar del Usuario"}
            />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="flex flex-col gap-1">
        <div className="px-4 py-3 flex items-center gap-3 border-b border-app-neutral-100">
          <Avatar className="size-10">
            <AvatarImage
              src={session.user.image ?? undefined}
              alt={session.user.name ?? "Avatar del Usuario"}
            />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-preset-4">{session.user.name}</p>
            <span className="text-preset-4--medium text-app-neutral-800">
              {session.user.email}
            </span>
          </div>
        </div>

        <div className="px-2 py-1">
          <div className="p-2 flex items-center justify-between gap-2.5 h-11.5">
            <div className="flex items-center gap-2.5 text-app-neutral-800">
              <PaletteIcon className="pointer-events-none" />
              <span className="text-preset-4">Tema</span>
            </div>
            <ToggleTheme />
          </div>
        </div>

        <div className="px-2 py-1">
          <Logout />
        </div>
      </PopoverContent>
    </Popover>
  );
};
