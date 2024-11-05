interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const BackIcon = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M5.563 13.061a.75.75 0 0 1 0-1.04l3.834-3.985a.75.75 0 0 1 1.29.52v2.297c0 .104.084.188.188.188h7.312a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-7.312a.187.187 0 0 0-.188.187v2.298a.75.75 0 0 1-1.29.52L5.563 13.06Z"
    />
    <path
      fill="#fff"
      d="M4.5 1.104a3.75 3.75 0 0 0-3.75 3.75v15a3.75 3.75 0 0 0 3.75 3.75h15a3.75 3.75 0 0 0 3.75-3.75v-15a3.75 3.75 0 0 0-3.75-3.75h-15Zm-2.25 3.75a2.25 2.25 0 0 1 2.25-2.25h15a2.25 2.25 0 0 1 2.25 2.25v15a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25v-15Z"
    />
  </svg>
);
export default BackIcon;
