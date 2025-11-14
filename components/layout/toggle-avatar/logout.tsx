"use client";

import { FC } from "react";
import { LogOutIcon } from "@/components/icons";
import { Button } from "@/components/shadcn/button";
import { toast } from "sonner";
import { logoutAction } from "@/actions/auth";

interface LogoutProps {}

export const Logout: FC<LogoutProps> = () => {
  const handleLogout = () => {
    toast.promise(logoutAction(), {
      loading: "Cerrando sesión...",
      success: "Sesión cerrada correctamente",
      error: "Error al cerrar sesión",
    });
  };

  return (
    <Button
      onClick={handleLogout}
      variant="ghost"
      size="sm"
      className="w-full justify-start"
    >
      <LogOutIcon className="size-5" />
      <span className="text-preset-4">Cerrar sesión</span>
    </Button>
  );
};
