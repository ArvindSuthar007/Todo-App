import { useState } from "react";
import add_icon from "../resources/add_icon.png";
import "./TodoForm.css";

export default function TodoForm({ addItem }) {
  //re-render: on input-box value change
  const [inputValue, setInputValue] = useState("");
  const inputChangeTask = (e) => {
    setInputValue(e.target.value);
  };

  //handles input-box submission then empty it
  const handleSubmitClick = () => {
    const updatedValue = inputValue.trim(); //trim: empty-spaces handle

    if (updatedValue !== "") {
      const obj = { key: null, inputtext: updatedValue, mark: false };
      addItem(obj);
      setInputValue("");
    } else {
      setInputValue("");
    }
  };
  function keypress(event) {
    if (event.key === "Enter") handleSubmitClick();
  }

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="enter items here . . ."
        value={inputValue}
        onChange={inputChangeTask}
        onKeyDown={keypress}
        maxLength="130"
      />
      <button onClick={handleSubmitClick}>
        <img src={add_icon} alt="Add" width="30px" height="30px" />
      </button>
    </div>
  );
}
