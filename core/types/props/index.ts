import { ButtonHTMLAttributes, ReactNode } from "react";

// Layout components props
export interface PageLayoutProps {
  navbar?: boolean;
  children: ReactNode;
}
export interface PageContainerProps {
  headTitle: string;
  description?: string;
  center?: boolean;
  children: ReactNode;
}

// Widget components props
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "see-more" | "next-project";
}
export interface VisuallyHiddenProps {
  asChild?: boolean;
  children: ReactNode;
}
