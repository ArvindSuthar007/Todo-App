import "./ToggleButton.css";

function ToggleButton() {
  return (
    <div className="toggle-container">
      <input type="checkbox" id="toggle-slider" />
      <label htmlFor="toggle-slider"></label>
    </div>
  );
}

export default ToggleButton;
