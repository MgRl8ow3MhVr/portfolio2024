import "./CheckBox.css";

const CheckBox = ({ checkColor }) => {
  return (
    <div
      className="checkbox-wrapper-19"
      style={{ "--checkcolor": checkColor }}
    >
      <input type="checkbox" defaultChecked />
      <label className="check-box" />
    </div>
  );
};

export default CheckBox;
