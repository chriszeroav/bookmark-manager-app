"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/lib/utils";
import { CheckmarkIcon } from "@/components/icons";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "border size-4 focus-visible:ring-2 focus-visible:ring-offset-2",
        "transition-all outline-none shrink-0 rounded text-app-neutral-0",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "border-app-neutral-500 dark:border-app-neutral-dark-300",
        "hover:bg-app-neutral-300 dark:hover:bg-app-neutral-dark-600",
        "data-[state=checked]:bg-app-teal-700",
        "data-[state=checked]:border-app-teal-700 dark:data-[state=checked]:border-app-teal-700",
        "data-[state=checked]:hover:bg-app-teal-800 data-[state=checked]:hover:border-app-teal-800",
        "dark:data-[state=checked]:hover:bg-app-teal-800 dark:data-[state=checked]:hover:border-app-teal-800",
        "focus-visible:ring-app-teal-700 dark:focus-visible:ring-app-neutral-dark-100",
        "dark:focus-visible:ring-offset-app-neutral-dark-800",

        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckmarkIcon className="size-3" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };

/**
 * 
 * 
 * "hover:bg-app-neutral-300 dark:hover:bg-app-neutral-dark-600",
        "data-[state=checked]:hover:bg-app-teal-800 dark:data-[state=checked]:hover:bg-app-teal-800",
        "data-[state=checked]:bg-app-teal-700 data-[state=checked]:text-app-neutral-0",
        "data-[state=checked]:border-app-teal-700 dark:data-[state=checked]:border-app-teal-700",
        "peer        focus-visible:ring-2 
 */
