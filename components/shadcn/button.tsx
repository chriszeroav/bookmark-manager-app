import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-lg transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-app-teal-700 focus-visible:ring-offset-2 focus-visible:ring-offset-app-neutral-0",
  {
    variants: {
      variant: {
        default: "bg-app-teal-700 text-app-neutral-0 hover:bg-app-teal-800",
        ghost:
          "text-app-neutral-800 dark:text-app-neutral-dark-100 hover:bg-neutral-100 dark:hover:bg-app-neutral-dark-600 hover:text-app-neutral-900 dark:hover:text-app-neutral-dark-0 dark:focus-visible:bg-app-neutral-dark-600 dark:focus-visible:text-app-neutral-dark-0 dark:focus-visible:ring-app-neutral-dark-100 dark:focus-visible:ring-offset-app-neutral-dark-800 focus-visible:bg-app-neutral-0",
        outline:
          "text-app-neutral-900 border border-app-neutral-400 bg-app-neutral-0 hover:bg-app-neutral-100",
      },
      size: {
        sm: "h-9 p-2",
        default: "h-10 px-3 py-2",
        md: "h-11 px-3",
        lg: "h-12 px-4 py-3",
        avatar: "size-10 rounded-full",
        mini: "size-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
