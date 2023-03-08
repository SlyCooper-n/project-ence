import { ImgHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import { Skeleton } from "./Skeleton";

interface RootProps {
  className?: string;
  children: ReactNode | ReactNode[];
}

const Root = ({ className, children }: RootProps) => {
  return (
    <picture className={twMerge("relative", className)}>
      <Skeleton className="absolute inset-0.5 -z-10" />

      {children}
    </picture>
  );
};

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

const Image = ({ alt, className, ...props }: ImageProps) => {
  return (
    <img
      {...props}
      alt={alt}
      className={twMerge("w-full object-cover", className)}
    />
  );
};

export const Picture = {
  Root,
  Image,
};
