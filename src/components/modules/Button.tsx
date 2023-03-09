import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  className?: string;
  children: ReactNode;
}

export const Button = ({ asChild, className = "", children }: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={twMerge(
        "mx-auto flex w-44 items-center justify-center border border-transparent bg-white py-3 text-xs font-semibold text-black transition-colors hover:border-white hover:bg-transparent hover:text-white md:w-64 md:py-5 md:text-base",
        className,
      )}
    >
      {children}
    </Comp>
  );
};
