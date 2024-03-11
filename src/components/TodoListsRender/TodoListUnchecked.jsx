import ListItem from "../List Item/ListItem";

export default function TodoListUnchecked({
  list,
  deleteItem,
  toggleMark,
  trueCount,
  EditItem,
}) {
  return (
    <>
      <h2
        style={{
          float: "center",
        }}
      >
        Items yet to complete :-{" "}
      </h2>
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
    </>
  );
}
