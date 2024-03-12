import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList";
import DialogBox from "./components/DialogBox";
import Footer from "./components/Footer/Footer";
import "./App.css";

const items = [{ key: 1, inputtext: "a random demo text", mark: false }];

let counting = 1;
function App() {
  const [list, setList] = useState(items);
  const [count, setCount] = useState(2);

  const [dialogText, setDialogText] = useState("");
  const [hider, setHider] = useState("none");

  const showDialogBox = () => {
    setHider("flex");
    setTimeout(() => {
      setHider("none");
    }, 5000);
  };

  const addItem = (newitem) => {
    newitem = { ...newitem, key: count };

    const num = count + 1;
    setCount(num);

    const updatedList = [...list, newitem];
    counting = updatedList.filter((i) => !i.mark).length;

    setList(updatedList);

    setDialogText("added");
    showDialogBox();
  };

  const EditItem = (key, newtext) => {
    setList(
      list.map((item) => {
        if (item.key === key) return { ...item, inputtext: newtext };
        else return item;
      })
    );
    setDialogText("Edited");
    showDialogBox();
  };

  const deleteItem = (item) => {
    const updatedList = list.filter((i) => i.key !== item.key);

    counting = updatedList.filter((i) => !i.mark).length;

    setList(updatedList);

    setDialogText("deleted");
    showDialogBox();
  };

  const toggleMark = (key) => {
    const updatedList = list.map((item) => {
      if (item.key === key) return { ...item, mark: !item.mark };
      else return item;
    });

    counting = updatedList.filter((i) => !i.mark).length;

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
        counting={counting}
      />

      <DialogBox text={dialogText} hider={hider} />

      <Footer />
    </>
  );
}

export default App;
