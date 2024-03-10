import ListItem from '../List Item/ListItem';

export default function TodoListChecked({ list, deleteItem, toggleMark, trueCount }) {
    return(
        <>
            <h2>Completed Items :- </h2>
            <div style={{
                "paddingLeft" : "2.5rem",
                "border" : "1px solid #33333385",
            }}>
                {list.length === 0 ? (
                    <h3>No items here ..</h3>
                ):(
                    <ul style={{
                        "listStyle" : "none",
                    }}>
                        {trueCount > 0 ? (
                            list.map(item => (
                                item.mark === true && (
                                    <li key={item.key}>
                                        <ListItem
                                            Inputobj={item}
                                            deleteItem={deleteItem}
                                            toggleMark={toggleMark}
                                        />
                                    </li>
                                )
                            ))
                        ):(
                            <h3>No items here ...</h3>
                        )}
                    </ul>
                )}
            </div>
        </>
    )
}