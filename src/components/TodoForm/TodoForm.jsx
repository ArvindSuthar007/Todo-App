import { useState } from "react";
import "./TodoForm.css";

export default function TodoForm({ addItem }) {
  const [inputValue, setInputValue] = useState("");

  const inputChangeTask = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmitClick = () => {
    const obj = { key: null, inputtext: inputValue, mark: false };
    addItem(obj);
    setInputValue("");
  };

  function keypress(event) {
    if (event.key === "Enter") handleSubmitClick();
  }

  return (
    <div className="search-container">
      <input
        type="search"
        placeholder="enter items here . . ."
        value={inputValue}
        onChange={inputChangeTask}
        onKeyDown={keypress}
      />
      <span> </span>
      <button onClick={handleSubmitClick}>Enter</button>
    </div>
  );
}
