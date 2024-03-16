import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import NewParticles from "./components/NewParticles";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <NewParticles />
    </div>
  </React.StrictMode>
);
