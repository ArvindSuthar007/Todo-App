import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList";
import DialogBox from "./components/DialogBox";
import NewParticles from "./components/NewParticles";
import Footer from "./components/Footer/Footer";
import "./App.css";

const items = [{ key: 1, inputtext: "a random demo text", mark: false }];
let timeoutId;

function App() {
  const [list, setList] = useState(items);

  const [listKeyCount, setListKeyCount] = useState(2);
  const [falseMarkListCount, setFalseMarkListCount] = useState(1);

  const [dialogText, setDialogText] = useState("");
  const [dialogflag, setDialogFlag] = useState(false);

  const showDialogBox = (text) => {
    setDialogText(text);

    if (timeoutId) clearTimeout(timeoutId);

    setDialogFlag(true);
    timeoutId = setTimeout(() => {
      setDialogFlag(false);
    }, 5000);
  };

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

    showDialogBox("added");
  };

  const EditItem = (key, newtext) => {
    setList(
      list.map((item) => {
        if (item.key === key) return { ...item, inputtext: newtext };
        else return item;
      })
    );

    showDialogBox("Edited");
  };

  const deleteItem = (item) => {
    const updatedList = list.filter((i) => i.key !== item.key);

    countingUpdater(updatedList);

    setList(updatedList);

    showDialogBox("Deleted");
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

      {dialogflag && <DialogBox text={dialogText} />}
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <NewParticles />
      </div>

      <Footer />
    </>
  );
}

export default App;
