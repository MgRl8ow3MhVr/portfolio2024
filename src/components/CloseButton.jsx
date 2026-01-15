import Close from "../assets/svg/close.jsx";
import "./CloseButton.css";

const CloseButton = ({
  size = 50,
  onClick,
  direction = "left",
  absolute = true,
  offset = { right: "10px", top: "10px" }
}) => {
  // Calculate rotation based on direction
  const getRotation = () => {
    switch (direction) {
      case "up":
        return 0;
      case "right":
        return 90;
      case "down":
        return 180;
      case "left":
        return -90;
      default:
        return 0;
    }
  };

  return (
    <div
      className={`close-button ${!absolute ? 'close-button-relative' : ''}`}
      onClick={onClick}
      style={{
        transform: `rotate(${getRotation()}deg)`,
        ...(absolute && offset)
      }}
    >
      <Close size={size} direction="up" />
    </div>
  );
};

export default CloseButton;
