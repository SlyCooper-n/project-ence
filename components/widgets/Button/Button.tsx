import { useTheme } from "@core/hooks";
import { ButtonProps } from "@core/types";

export const Button = (props: ButtonProps) => {
  const { theme } = useTheme();

  return (
    <button
      type="button"
      className={`h-7 lg:h-10 flex flex-row justify-center items-center ${
        theme === "dark" ? "bg-secondary" : "bg-primary"
      } text-white ${props.className}`}
    >
      <div className="text-xs lg:text-sm">{props.children}</div>
    </button>
  );
};
