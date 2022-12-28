import { ButtonProps } from "@core/types";

export const Button = ({
  variant = "button",
  color = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`group min-w-fit h-7 lg:h-10 px-4 flex flex-row justify-center items-center gap-0 hover:gap-5 transition-all ${
        color == "primary"
          ? "bg-black text-secondary"
          : "bg-secondary text-black"
      } ${className}`}
    >
      <div className="text-xs lg:text-sm -mr-5 group-hover:mr-0 font-semibold">
        {children}
      </div>

      <div
        className={`h-full flex justify-center items-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all`}
      >
        <svg width="10" height="25" viewBox="0 0 43 78" fill="none">
          <path
            d="M8 70L39 39L8 8"
            stroke={`${color == "primary" ? "#E5F2C9" : "#000000"}`}
            strokeWidth="10.3333"
            strokeLinecap="square"
            strokeLinejoin="bevel"
          />
        </svg>
      </div>
    </button>
  );
};
