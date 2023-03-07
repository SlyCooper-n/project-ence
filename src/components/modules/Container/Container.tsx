import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  asChild?: boolean;
  className?: string;
  children: ReactNode;
}

export const Container = ({
  asChild,
  className = "",
  children,
}: ContainerProps) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={twMerge(
        "mx-auto w-full max-w-[1920px] px-6 lg:px-14",
        className,
      )}
    >
      {children}
    </Comp>
  );
};
