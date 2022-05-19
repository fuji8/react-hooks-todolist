import React, { useState } from 'react';
import data from './data.json';
//components
import Header from './Header';
import ToDoList from './ToDoList';

import './App.css';
import ToDoForm from './ToDoForm';

function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id: number) => {
    const mapped = toDoList.map((task) => {
      return task.id == id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    const filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (userInput: string) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copy);
  };

  return (
    <div className="App">
      <Header />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;
