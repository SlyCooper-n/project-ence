import { useTheme } from "@core/hooks";
import { ButtonProps } from "@core/types";

export const Button = (props: ButtonProps) => {
  const { theme } = useTheme();

  return (
    <button
      type="button"
      className={`h-7 lg:h-10 flex flex-row items-center ${
        theme === "dark" ? "bg-secondary" : "bg-primary"
      } text-white ${props.className}`}
    >
      <div className="flex-1 text-xs lg:text-sm">{props.children}</div>

      <div className={`w-[23%] h-full flex justify-center items-center`}>
        <img src="/icons/arrow.svg" alt="Right arrow" className="w-2/3" />
      </div>
    </button>
  );
};
