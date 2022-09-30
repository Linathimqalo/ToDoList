import data from "./components/data.json";
//components
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDoForm from './components/ToDoForm';
import React, { useState } from "react";

function App() {
  
  const [ toDoList, setToDoList ] = useState(data);

  /*When the user clicks, it must toggle whether true or false */
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  /*Remove toggled tasks */
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  /*Takes the input and makes a copy then assigns it to new array. */
  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
