interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const Line = ({ className, ...props }: Props) => {
  return (
    <svg
      className={className}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="66"
      height="13"
      viewBox="0 0 66 13"
      fill="none"
    >
      <path
        d="M1 1C1 1 7.5 11.25 33 11.25C58.5 11.25 65 1 65 1"
        stroke="url(#paint0_linear_101_178)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_101_178"
          x1="1"
          y1="6.125"
          x2="65"
          y2="6.125"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#794FA0" />
          <stop offset="1" stopColor="#DF4E58" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Line;
