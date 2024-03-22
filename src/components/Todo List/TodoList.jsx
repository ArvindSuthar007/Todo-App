import ListItem from "../List Item/ListItem";
import "../Todo List/TodoList.css";

export default function TodoListUnchecked({
  list,
  deleteItem,
  toggleMark,
  EditItem,
  falseMarkListCount,
}) {
  return (
    <div className="whole-list-container">
      <div className="Unchecked-container">
        <div id="title1">
          Incomplete Items
          <hr />
        </div>
        <ul>
          {list.length > 0 && falseMarkListCount > 0 ? (
            list.map(
              (item) =>
                item.mark === false && (
                  <li key={item.key}>
                    <ListItem
                      Inputobj={item}
                      deleteItem={deleteItem}
                      toggleMark={toggleMark}
                      EditItem={EditItem}
                    />
                  </li>
                )
            )
          ) : (
            <div id="empty-message">
              <h2>Add items here ...</h2>
            </div>
          )}
        </ul>
      </div>

      <div className="Checked-container">
        <div id="title2">
          Completed Items
          <hr />
        </div>
        <ul>
          {list.length > 0 && list.length - falseMarkListCount > 0 ? (
            list.map(
              (item) =>
                item.mark === true && (
                  <li key={item.key}>
                    <ListItem
                      Inputobj={item}
                      deleteItem={deleteItem}
                      toggleMark={toggleMark}
                      EditItem={EditItem}
                    />
                  </li>
                )
            )
          ) : (
            <div id="empty-message">
              <h2>No items here ...</h2>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}
