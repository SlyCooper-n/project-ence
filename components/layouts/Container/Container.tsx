import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  asChild?: boolean;
  children: ReactNode;
}

export const Container = (props: ContainerProps) => {
  const Comp = props.asChild ? Slot : "div";

  return (
    <Comp className={`w-[95vw] mx-auto ${props.className ?? ""}`}>
      {props.children}
    </Comp>
  );
};
