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
  //clicks functions passed from App.jsx {toggleMark && deleteItem}
  const handleCheckboxChange = () => {
    toggleMark(Inputobj.key);
  };
  const handleDeleteClick = () => {
    deleteItem(Inputobj);
  };

  //re-render: on edit-click
  const [editState, setEditState] = useState(false);
  const handleEditClick = () => {
    setEditState(!editState);
  };

  //holds new input-box-values
  const [newInput, setNewInput] = useState(Inputobj.inputtext);
  const handleEditChange = (e) => {
    setNewInput(e.target.value);
  };

  //updates item in main-list by EditItem{passed from App.jsx} then setEditState(false)
  const handleSaveClick = () => {
    EditItem(Inputobj.key, newInput);
    handleEditClick();
  };
  const handleSaveKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSaveClick();
    }
  };

  return (
    <div className="listItem-container" key={Inputobj.key}>
      <div className="checkbox-text-wrapper">
        <input
          type="checkbox"
          checked={Inputobj.mark}
          onChange={handleCheckboxChange}
        />

        {/* based on editstate input-box or text renders */}
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
        {/* based on editstae renders: either save or edit button */}
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
