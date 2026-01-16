const Clock = ({ size = 16, color = "#333" }) => {
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
      {/* Clock circle */}
      <circle cx="12" cy="12" r="10" />
      {/* Clock hands - pointing at 3 o'clock */}
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
};

export default Clock;
