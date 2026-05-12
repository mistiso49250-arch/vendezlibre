import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionTitleVariants = cva("grid gap-4", {
  variants: {
    align: {
      left: "text-left",
      center: "mx-auto text-center",
    },
    width: {
      sm: "max-w-2xl",
      md: "max-w-3xl",
      lg: "max-w-4xl",
      full: "max-w-none",
    },
  },
  defaultVariants: {
    align: "left",
    width: "md",
  },
});

type SectionTitleProps = React.ComponentProps<"div"> &
  VariantProps<typeof sectionTitleVariants> & {
    eyebrow?: React.ReactNode;
    title: React.ReactNode;
    description?: React.ReactNode;
  };

function SectionTitle({
  className,
  align,
  width,
  eyebrow,
  title,
  description,
  ...props
}: SectionTitleProps) {
  return (
    <div
      data-slot="section-title"
      className={cn(sectionTitleVariants({ align, width }), className)}
      {...props}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-normal text-accent">
          {eyebrow}
        </p>
      ) : null}
      <div className="grid gap-3">
        <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export { SectionTitle, sectionTitleVariants };
