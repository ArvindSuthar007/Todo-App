import "./ToggleButton.css";

export default function ToggleButton() {
  return (
    <div className="toggle-container">
      {/* holds button's state */}
      <input type="checkbox" id="toggle-slider" />

      {/* contains button's animations */}
      <label htmlFor="toggle-slider"></label>
    </div>
  );
}
