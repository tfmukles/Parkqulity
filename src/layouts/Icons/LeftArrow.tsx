interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const LeftArrowLong = ({ className, ...props }: Props) => {
  return (
    <svg
      className={className}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="71"
      height="45"
      viewBox="0 0 71 45"
      fill="none"
    >
      <path
        d="M22.5 43L2 22.5M2 22.5L22.5 2M2 22.5L69.5 22.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
};

export default LeftArrowLong;
