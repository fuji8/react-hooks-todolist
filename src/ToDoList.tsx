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
}

const ToDoList = ({ toDoList, handleToggle, handleFilter }: Props) => {
  return (
    <div>
      {toDoList.map((todo) => {
        return <ToDo todo={todo} handleToggle={handleToggle} key={todo.id} />;
      })}
      <button style={{ margin: '20px' }} onClick={handleFilter}>
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoList;
