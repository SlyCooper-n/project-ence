import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TextProps {
  asChild?: boolean;
  className?: string;
  children: ReactNode;
}

export const Text = ({ asChild, className = "", children }: TextProps) => {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={twMerge(
        "text-base selection:bg-gray selection:text-white/75",
        className,
      )}
    >
      {children}
    </Comp>
  );
};
