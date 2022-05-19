import React from 'react';
import ToDo from './ToDo';

interface Props {
  toDoList: {
    id: number;
    task: string;
    complete: boolean;
  }[];
  handleToggle: (id: number) => void;
  handleFilter: () => void;
  showFiltered: () => void;
}

const ToDoList = ({
  toDoList,
  handleToggle,
  handleFilter,
  showFiltered,
}: Props) => {
  return (
    <div>
      {toDoList.map((todo) => {
        return <ToDo todo={todo} handleToggle={handleToggle} key={todo.id} />;
      })}
      <button style={{ margin: '20px' }} onClick={handleFilter}>
        Clear Completed
      </button>
      <button style={{ margin: '20px' }} onClick={showFiltered}>
        Show Completed
      </button>
    </div>
  );
};

export default ToDoList;
