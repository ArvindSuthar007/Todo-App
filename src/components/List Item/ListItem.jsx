import { useState } from "react";
import "./ListItem.css";
import save_icon from "../resources/save_icon.png";
import edit_icon from "../resources/edit_icon.png";
import delete_icon from "../resources/delete_icon.png";

export default function ListItem({
  Inputobj,
  deleteItem,
  toggleMark,
  EditItem,
}) {
  const [editState, setEditState] = useState(false);
  const [newInput, setNewInput] = useState(Inputobj.inputtext);

  const handleCheckboxChange = () => {
    toggleMark(Inputobj.key);
  };

  const handleEditClick = () => {
    setEditState(!editState);
  };

  const handleEditChange = (e) => {
    setNewInput(e.target.value);
  };

  const handleSaveClick = () => {
    EditItem(Inputobj.key, newInput);
    handleEditClick();
  };

  const handleSaveKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSaveClick();
    }
  };

  const handleDeleteClick = () => {
    deleteItem(Inputobj);
  };

  return (
    <div className="listItem-container" key={Inputobj.key}>
      <div className="checkbox-text-wrapper">
        <input
          type="checkbox"
          checked={Inputobj.mark}
          onChange={handleCheckboxChange}
        />
        {editState === true ? (
          <input
            type="text"
            value={newInput}
            onChange={handleEditChange}
            onKeyDown={handleSaveKeyDown}
            id="Editer"
          />
        ) : (
          <span>{Inputobj.inputtext}</span>
        )}
      </div>

      <div className="buttons-wrapper">
        {editState === true ? (
          <button onClick={handleSaveClick}>
            <img src={save_icon} alt="Save" width="30px" height="30px" />
          </button>
        ) : (
          <button onClick={handleEditClick}>
            <img src={edit_icon} alt="Edit" width="30px" height="30px" />
          </button>
        )}

        <button onClick={handleDeleteClick}>
          <img alt="Delete" src={delete_icon} width="30px" height="30px" />
        </button>
      </div>
    </div>
  );
}
