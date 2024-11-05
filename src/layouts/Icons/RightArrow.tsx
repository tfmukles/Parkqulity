interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const RightArrowLong = ({ className, ...props }: Props) => {
  return (
    <svg
      className={className}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="45"
      viewBox="0 0 70 45"
      fill="none"
    >
      <path
        d="M48 2L68.5 22.5M68.5 22.5L48 43M68.5 22.5L1 22.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
};

export default RightArrowLong;
