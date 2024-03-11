import ListItem from "./List Item/ListItem";

export default function TodoListUnchecked({
  list,
  deleteItem,
  toggleMark,
  trueCount,
  EditItem,
}) {
  return (
    <>
      <h2>Items yet to complete :- </h2>
      <div
        style={{
          paddingLeft: "2.5rem",
          border: "1px solid #33333385",
        }}
      >
        <ul
          style={{
            listStyle: "none",
          }}
        >
          {list.length - trueCount > 0 ? (
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

      <h2>Completed Items :- </h2>
      <div
        style={{
          paddingLeft: "2.5rem",
          border: "1px solid #33333385",
        }}
      >
        <ul
          style={{
            listStyle: "none",
          }}
        >
          {trueCount > 0 ? (
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
    </>
  );
}
