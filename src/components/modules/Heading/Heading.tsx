import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface HeadingProps {
  asChild?: boolean;
  className?: string;
  children: ReactNode;
}

export const Heading = ({
  asChild,
  className = "",
  children,
}: HeadingProps) => {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      className={twMerge(
        "text-xl font-semibold selection:bg-gray selection:text-white/75",
        className,
      )}
    >
      {children}
    </Comp>
  );
};
