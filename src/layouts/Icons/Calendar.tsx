interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const Calendar = ({ className, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    className={className}
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.75 6a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V6Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.75 9h16.5m-4.5-3V3m-7.5 3V3"
    />
    <path
      fill="#fff"
      d="M8.625 15.75a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25ZM13.125 14.625a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM15.375 15.75a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
    />
  </svg>
);
export default Calendar;
