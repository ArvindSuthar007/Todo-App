import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/Todo List/TodoList";
import Footer from "./components/Footer/Footer";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";

const items = [{ key: 1, inputtext: "a random demo text", mark: false }];
let timeoutId;

const deleting = () =>
  toast.success("Item deleted", {
    iconTheme: {
      primary: "red",
      secondary: "white",
    },
  });
const editing = () =>
  toast.success("Item edited", {
    iconTheme: {
      primary: "purple",
      secondary: "white",
    },
  });
const adding = () => toast.success("Item added");
function App() {
  const [list, setList] = useState(items);

  const [listKeyCount, setListKeyCount] = useState(2);
  const [falseMarkListCount, setFalseMarkListCount] = useState(1);

  const countingUpdater = (List) => {
    setFalseMarkListCount(List.filter((i) => !i.mark).length);
  };

  const addItem = (newitem) => {
    newitem = { ...newitem, key: listKeyCount };

    const num = listKeyCount + 1;
    setListKeyCount(num);

    const updatedList = [...list, newitem];
    countingUpdater(updatedList);

    setList(updatedList);
    adding();
  };

  const EditItem = (key, newtext) => {
    setList(
      list.map((item) => {
        if (item.key === key) return { ...item, inputtext: newtext };
        else return item;
      })
    );
    editing();
  };

  const deleteItem = (item) => {
    const updatedList = list.filter((i) => i.key !== item.key);

    countingUpdater(updatedList);

    setList(updatedList);
    deleting();
  };

  const toggleMark = (key) => {
    const updatedList = list.map((item) => {
      if (item.key === key) return { ...item, mark: !item.mark };
      else return item;
    });

    countingUpdater(updatedList);

    setList(updatedList);
  };

  return (
    <>
      <NavBar />

      <TodoForm addItem={addItem} />

      <TodoList
        list={list}
        deleteItem={deleteItem}
        toggleMark={toggleMark}
        EditItem={EditItem}
        falseMarkListCount={falseMarkListCount}
      />

      <Footer />
      <Toaster position="bottom-right" reverseOrder={true} />
    </>
  );
}

export default App;
