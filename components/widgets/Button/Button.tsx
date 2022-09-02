import { useTheme } from "@core/hooks";
import { ButtonProps } from "@core/types";

export const Button = (props: ButtonProps) => {
  const { theme } = useTheme();

  return (
    <button
      type="button"
      className={`h-7 lg:h-10 flex flex-row justify-center items-center gap-5 ${
        theme === "dark" ? "bg-secondary" : "bg-primary"
      } text-white ${props.className}`}
    >
      <div className="text-xs lg:text-sm">{props.children}</div>

      <div className={`h-full flex justify-center items-center`}>
        <img src="/icons/arrow.svg" alt="Right arrow" className="w-5" />
      </div>
    </button>
  );
};
