import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-lg transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-app-teal-700 text-app-neutral-0 hover:bg-app-teal-800",
        nav: "bg-app-neutral-0 text-app-neutral-800 hover:bg-app-neutral-100 hover:text-app-neutral-900",
        outline:
          "text-app-neutral-900 border border-app-neutral-400 bg-app-neutral-0 hover:bg-app-neutral-100",
        ghost:
          "bg-transparent hover:bg-app-neutral-100/50 text-app-neutral-800",
      },
      size: {
        sm: "h-9 p-2",
        default: "h-10 px-3 py-2",
        md: "h-11 px-3",
        lg: "h-12 px-4 py-3",
        avatar: "h-10 w-10 rounded-full",
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
