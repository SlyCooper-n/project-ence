import { ButtonProps } from "@core/types";

export const Button = ({ className, children, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`group h-7 lg:h-10 flex flex-row justify-center items-center gap-0 hover:gap-5 transition-all bg-black text-white ${className}`}
    >
      <div className="text-xs lg:text-sm -mr-5 group-hover:mr-0">
        {children}
      </div>

      <div
        className={`h-full flex justify-center items-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all`}
      >
        <img src="/icons/arrow.svg" alt="Right arrow" className="w-5" />
      </div>
    </button>
  );
};
