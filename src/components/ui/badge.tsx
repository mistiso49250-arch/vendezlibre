import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 rounded-full border font-medium whitespace-nowrap transition-colors duration-200 focus-visible:ring-3 focus-visible:ring-ring/35 [&>svg]:pointer-events-none [&>svg]:size-3.5",
  {
    variants: {
      variant: {
        default: "border-primary/15 bg-primary/10 text-primary",
        accent: "border-accent/20 bg-accent/12 text-primary",
        success: "border-success/20 bg-success/10 text-success",
        warning: "border-warning/25 bg-warning/12 text-warning",
        destructive: "border-destructive/25 bg-destructive/10 text-destructive",
        outline: "border-border bg-card text-muted-foreground",
        muted: "border-transparent bg-muted text-muted-foreground",
      },
      size: {
        sm: "h-6 px-2 text-xs",
        md: "h-7 px-2.5 text-xs",
        lg: "h-8 px-3 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

function Badge({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
