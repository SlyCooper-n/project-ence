import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";

const logoSizes = {
  base: {
    width: 27,
    height: 43,
  },
  lg: {
    width: 33,
    height: 52,
  },
};

interface LogoProps {
  size?: keyof typeof logoSizes;
}

export const Logo = ({ size = "base" }: LogoProps) => {
  const { width, height } = logoSizes[size];

  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 27 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 35.6517V25.0605L27 32.3699V42.9611L0 35.6517Z"
          fill="#F2F2F8"
        />
        <path
          d="M0 22.077V11.4858L27 18.7952V29.3864L0 22.077Z"
          fill="#F2F2F8"
        />
        <rect width="19.9889" height="9.99447" fill="#F2F2F8" />
      </svg>

      <VisuallyHidden>Ence Studio</VisuallyHidden>
    </>
  );
};
