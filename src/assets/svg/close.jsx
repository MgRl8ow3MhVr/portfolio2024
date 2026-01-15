const Close = ({ size = 24, color = "#2e2e2ede", direction = "left" }) => {
  const paths = {
    left: "M19 12H5M12 19l-7-7 7-7",
    right: "M5 12h14M12 5l7 7-7 7",
    up: "M12 19V5M5 12l7-7 7 7",
    down: "M12 5v14M19 12l-7 7-7-7"
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[direction]} />
    </svg>
  );
};
export default Close;
