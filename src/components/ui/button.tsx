import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-transparent text-sm font-semibold outline-none transition-all duration-200 ease-out focus-visible:ring-3 focus-visible:ring-ring/35 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[var(--shadow-button)] hover:bg-primary/92 hover:shadow-[var(--shadow-button-hover)] active:translate-y-px",
        accent:
          "bg-accent text-accent-foreground shadow-[var(--shadow-button)] hover:bg-accent/90 hover:shadow-[var(--shadow-button-hover)] active:translate-y-px",
        secondary:
          "border-border/80 bg-secondary text-secondary-foreground hover:bg-secondary/80 active:translate-y-px",
        outline:
          "border-border bg-card text-foreground shadow-[var(--shadow-xs)] hover:border-primary/35 hover:bg-muted active:translate-y-px",
        ghost: "text-foreground hover:bg-muted hover:text-primary",
        destructive:
          "bg-destructive text-white shadow-[var(--shadow-button)] hover:bg-destructive/90 active:translate-y-px",
        link: "h-auto rounded-none p-0 text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4",
        lg: "h-12 px-5 text-base",
        icon: "size-10 p-0",
        "icon-sm": "size-8 p-0",
        "icon-lg": "size-12 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
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
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
