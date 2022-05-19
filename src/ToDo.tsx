import React from 'react';

interface Props {
  todo: {
    id: number;
    task: string;
    complete: boolean;
  };
  handleToggle: (id: number) => void;
}

const ToDo = ({ todo, handleToggle }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleToggle(parseInt(e.currentTarget.id));
  };

  return (
    <div
      id={todo.id.toString()}
      key={todo.id + todo.task}
      //name="todo"
      //value={todo.id}
      onClick={handleClick}
      className={todo.complete ? 'todo strike' : 'todo'}
    >
      {todo.task}
    </div>
  );
};

export default ToDo;
