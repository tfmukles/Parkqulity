interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const Shape = ({ className, ...props }: Props) => {
  return (
    <svg
      className={className}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="24"
      viewBox="0 0 34 24"
      fill="none"
    >
      <line
        x1="17"
        y1="24"
        x2="17"
        y2="-4.37114e-08"
        stroke="white"
        strokeWidth="2"
      />
      <line
        x1="25"
        y1="16"
        x2="25"
        y2="-2.18557e-08"
        stroke="white"
        strokeWidth="2"
      />
      <line
        x1="33"
        y1="8"
        x2="33"
        y2="-4.37112e-08"
        stroke="white"
        strokeWidth="2"
      />
      <line
        x1="1"
        y1="8"
        x2="1"
        y2="-4.37112e-08"
        stroke="white"
        strokeWidth="2"
      />
      <line
        x1="9"
        y1="16"
        x2="9"
        y2="-2.18557e-08"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
};

export default Shape;
