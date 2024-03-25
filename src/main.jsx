import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SnowParticles from "./components/Particles/SnowParticles.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: "-5",
        overflow: "hidden",
      }}
    >
      <SnowParticles />
    </div>
    <App />
  </React.StrictMode>
);
