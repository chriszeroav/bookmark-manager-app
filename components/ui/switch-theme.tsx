"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "@/components/icons";

function SwitchTheme({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch-theme"
      className={cn(
        "peer data-[state=checked]:bg-app-neutral-300 data-[state=unchecked]:bg-app-neutral-300 focus-visible:border-amber-600 focus-visible:ring-amber-600/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-7.5 w-16 shrink-0 items-center rounded-md p-0.5 transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 relative",
        "focus-visible:bg-amber-500",
        className
      )}
      {...props}
    >
      <div className="absolute z-10 left-0.5 w-7.5 h-6.5 flex items-center justify-center pointer-events-none">
        <SunIcon className="size-3.5 text-app-neutral-900" />
      </div>

      <div className="absolute z-10 right-0.5 w-7.5 h-6.5 flex items-center justify-center pointer-events-none">
        <MoonIcon className="size-3.5 text-app-neutral-900" />
      </div>

      <SwitchPrimitive.Thumb
        data-slot="switch-theme-thumb"
        className={cn(
          "bg-app-neutral-0 dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block w-7.5 h-6.5 rounded ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%)] data-[state=unchecked]:translate-x-0 relative"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { SwitchTheme };
