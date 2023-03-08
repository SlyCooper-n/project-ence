import { Slot } from "@radix-ui/react-slot";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean;
  className?: string;
  children: ReactNode;
}

export const Anchor = ({
  asChild,
  className = "",
  children,
  ...props
}: AnchorProps) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      {...props}
      className={twMerge(
        "relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:hover:w-full",
        className,
      )}
    >
      {children}
    </Comp>
  );
};
