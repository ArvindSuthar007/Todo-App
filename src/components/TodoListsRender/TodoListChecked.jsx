import ListItem from "../List Item/ListItem";

export default function TodoListChecked({
  list,
  deleteItem,
  toggleMark,
  trueCount,
  EditItem,
}) {
  return (
    <>
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
