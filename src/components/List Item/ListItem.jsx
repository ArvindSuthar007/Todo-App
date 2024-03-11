import { useState } from "react";
import "./ListItem.css";

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
          <input type="text" value={newInput} onChange={handleEditChange} />
        ) : (
          <span>{Inputobj.inputtext}</span>
        )}
      </div>

      <div className="buttons-wrapper">
        {editState === true ? (
          <button onClick={handleSaveClick}>Save</button>
        ) : (
          <button onClick={handleEditClick}>Edit</button>
        )}

        <button onClick={handleDeleteClick}>delete</button>
      </div>
    </div>
  );
}
