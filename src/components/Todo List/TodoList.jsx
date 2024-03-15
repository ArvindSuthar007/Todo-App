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
    <>
      <div className="Unchecked-container">
        <span id="title1">Items yet to complete :- </span>
        <div className="the-list">
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
              <h3>Add items here ...</h3>
            )}
          </ul>
        </div>
      </div>

      <div className="Checked-container">
        <span id="title2">Completed Items :- </span>
        <div className="the-list">
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
              <h3>No items here ...</h3>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
