import { VisuallyHidden } from "./VisuallyHidden";

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
        className="group"
      >
        <path
          d="M0 35.6517V25.0605L27 32.3699V42.9611L0 35.6517Z"
          className="fill-[#F2F2F8] transition-colors delay-150 duration-300 group-hover:fill-black group-hover:stroke-white group-hover:stroke-2"
        />
        <path
          d="M0 22.077V11.4858L27 18.7952V29.3864L0 22.077Z"
          className="fill-[#F2F2F8] transition-colors delay-75 duration-300 group-hover:fill-black group-hover:stroke-white group-hover:stroke-2"
        />
        <rect
          width="19.9889"
          height="9.99447"
          className="fill-[#F2F2F8] transition-colors  duration-300 group-hover:fill-black group-hover:stroke-white group-hover:stroke-2"
        />
      </svg>

      <VisuallyHidden>Ence Studio</VisuallyHidden>
    </>
  );
};
