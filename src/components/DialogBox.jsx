import { useState } from "react";

export default function DialogBox({ text, hider }) {
  return (
    <div
      style={{
        border: "5px solid lightblue",
        borderRadius: "0.6rem",
        backgroundColor: "white",

        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "2",
        width: "10rem",

        display: hider,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h4
        style={{
          color: "red",
          textShadow: "0 0 10px red, 0 0 20px red, 0 0 30px red, 0 0 40px red",
        }}
      >
        Item {text}
      </h4>
    </div>
  );
}
