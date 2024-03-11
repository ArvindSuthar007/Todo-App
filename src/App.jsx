import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList";
import DialogBox from "./components/DialogBox";
import Footer from "./components/Footer/Footer";
import "./App.css";

const items = [{ key: 1, inputtext: "a random demo text", mark: false }];

function App() {
  const [list, setList] = useState(items);
  const [count, setCount] = useState(2);
  const [trueCount, setTrueCount] = useState(0);
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

    setList([...list, newitem]);
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
    setDialogText("Edited Successfully");
    showDialogBox();
  };

  const deleteItem = (item) => {
    setList(list.filter((i) => i.key !== item.key));
    setDialogText("deleted");
    showDialogBox();
  };

  const toggleMark = (key) => {
    setList(() => {
      let updatedList = list.map((item) => {
        if (item.key === key) return { ...item, mark: !item.mark };
        else return item;
      });

      let counting = updatedList.reduce((num, item) => {
        return item.mark === true ? num + 1 : num;
      }, 0);
      setTrueCount(counting);

      return updatedList;
    });
  };

  return (
    <>
      <NavBar />

      <TodoForm addItem={addItem} />

      <TodoList
        list={list}
        deleteItem={deleteItem}
        toggleMark={toggleMark}
        trueCount={trueCount}
        EditItem={EditItem}
      />

      <DialogBox text={dialogText} hider={hider} />

      <Footer />
    </>
  );
}

export default App;
