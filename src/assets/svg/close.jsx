import React from "react";
const Close = ({ size = 24, color = "#2e2e2ede" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="white"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 3h18v18H3zM15 9l-6 6m0-6l6 6" />
  </svg>
);
export default Close;
