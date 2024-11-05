interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const RgihtAngle = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={45}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="square"
      strokeWidth={2}
      d="m2 2 19.086 19.086a2 2 0 0 1 0 2.828L2 43"
    />
  </svg>
);
export default RgihtAngle;
