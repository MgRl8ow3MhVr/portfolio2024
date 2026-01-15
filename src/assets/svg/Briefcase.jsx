const Briefcase = ({ size = 24, color = "#c0c0c0" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Main briefcase body - bigger */}
      <rect x="2" y="7" width="20" height="13" rx="2" ry="2" stroke={color} strokeWidth="2" />

      {/* Handle on top - bigger */}
      <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke={color} strokeWidth="2" />

      {/* Horizontal divider line */}
      <line x1="2" y1="13.5" x2="22" y2="13.5" stroke={color} strokeWidth="1" />
    </svg>
  );
};

export default Briefcase;
