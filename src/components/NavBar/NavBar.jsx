import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="NavBar-container">
      <h1
        style={{
          fontFamily: "MainFont, sans-serif",
          fontWeight: "100",
        }}
      >
        ToDo App
      </h1>
      <h1 id="Contact">Contact</h1>
    </div>
  );
}
