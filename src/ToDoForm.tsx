import React, { useState } from 'react';

interface Props {
  addTask: (userInput: string) => void;
}

const ToDoForm = ({ addTask }: Props) => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Enter task..."
      />
      <button>Submit</button>
    </form>
  );
};

export default ToDoForm;
