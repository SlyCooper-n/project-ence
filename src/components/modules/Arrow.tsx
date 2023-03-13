interface ArrowProps {
  className?: string;
}

export const Arrow = ({ className }: ArrowProps) => {
  return (
    <svg
      width="21"
      height="12"
      viewBox="0 0 21 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.14258 2.14307L10.3929 10.3934L18.6432 2.14307"
        stroke="black"
        strokeWidth="2.94719"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};
