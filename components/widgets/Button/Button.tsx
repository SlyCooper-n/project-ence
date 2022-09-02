import { useTheme } from "@core/hooks";
import { ButtonProps } from "@core/types";

export const Button = (props: ButtonProps) => {
  const { theme } = useTheme();

  return (
    <button
      type="button"
      className={`group h-7 lg:h-10 flex flex-row justify-center items-center gap-0 hover:gap-5 transition-all ${
        theme === "dark" ? "bg-secondary" : "bg-primary"
      } text-white ${props.className}`}
    >
      <div className="text-xs lg:text-sm">{props.children}</div>

      <div
        className={`w-5 h-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity`}
      >
        <img src="/icons/arrow.svg" alt="Right arrow" className="w-5" />
      </div>
    </button>
  );
};
