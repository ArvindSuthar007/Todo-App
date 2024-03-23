import "./NavBar.css";
import ToggleButton from "../Toggle Button/ToggleButton";

export default function NavBar() {
  return (
    <div className="NavBar-container">
      <h1 id="Site-name">ToDo App</h1>

      <ToggleButton />

      <h1 id="Contact">Contact</h1>
    </div>
  );
}
