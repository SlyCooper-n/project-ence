import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  asChild?: boolean;
  className?: string;
  children: ReactNode;
}

export const Button = ({ asChild, className = "", children }: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={twMerge(
        "mx-auto flex w-fit items-center justify-center bg-white py-3 text-xs font-semibold text-black md:text-base",
        className,
      )}
    >
      {children}
    </Comp>
  );
};
