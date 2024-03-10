import { useState } from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoListChecked from './components/TodoListsRender/TodoListChecked';
import TodoListUnchecked from './components/TodoListsRender/TodoListUnchecked';
import Footer from './components/Footer/Footer';
import './App.css';

const items = [
  {key: 1, inputtext: "a random demo text", mark: false}
];

function App() {
  const [ list, setList ] = useState(items);
  const [ count, setCount ] = useState(2);
  const [ trueCount, setTrueCount ] = useState(0);

  const addItem = (newitem) => {
    newitem = {...newitem, key: count};

    const num = count + 1;
    setCount(num);

    setList([...list, newitem ]);
  }

  const deleteItem = (item) => {
    setList(
      list.filter(i => i.key !== item.key)
    )
  }

  const toggleMark = (key) => {
    console.log("toggled");
  
    setList(() => {
      let updatedList = list.map(item => {
        if(item.key === key) return { ...item, mark: !item.mark};
        else return item;
      })
   
      let counting = updatedList.reduce((num, item) => {
        return item.mark === true ? num + 1 : num;
      },0);
      setTrueCount(counting);

      return updatedList;
    })
  }


  return (
    <>
      <TodoForm addItem={addItem} />
      <TodoListUnchecked
        list={list}
        deleteItem={deleteItem}
        toggleMark={toggleMark}
        trueCount={trueCount}
      />
      <TodoListChecked
        list={list}
        deleteItem={deleteItem}
        toggleMark={toggleMark}
        trueCount={trueCount}
      />
      <Footer />
    </>
  )
}

export default App