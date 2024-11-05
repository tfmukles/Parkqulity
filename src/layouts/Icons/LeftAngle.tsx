interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const LeftAngle = (props: Props) => (
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
      d="M21 43 1.914 23.914a2 2 0 0 1 0-2.828L21 2"
    />
  </svg>
);
export default LeftAngle;
