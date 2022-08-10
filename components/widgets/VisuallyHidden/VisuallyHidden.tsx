import { VisuallyHiddenProps } from "@core/types";
import { Root } from "@radix-ui/react-visually-hidden";

export const VisuallyHidden = ({ asChild, children }: VisuallyHiddenProps) => {
  return <Root asChild={asChild}>{children}</Root>;
};
