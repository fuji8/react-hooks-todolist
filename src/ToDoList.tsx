import React, {useState} from 'react';
import ToDo from './ToDo';

interface Props {
  toDoList: {
    id: number;
    task: string;
    complete: boolean;
  }[];
  handleToggle: (id: number) => void;
}

enum filterTypeEnum {
  ALL,
  COMPLETE,
  INCOMPLETE
}

const filteredToDo = (toDoList: {
  id: number;
  task: string;
  complete: boolean;
}[], type: number) => {
  if(type == filterTypeEnum.ALL) return toDoList;
  else if(type == filterTypeEnum.COMPLETE) return toDoList.filter(td => td.complete);
  else if(type == filterTypeEnum.INCOMPLETE) return toDoList.filter(td => !td.complete);
  else return []
}

const ToDoList = ({
  toDoList,
  handleToggle,
}: Props) => {
  const [filterType, setFilterType] = useState(filterTypeEnum.ALL);

  return (
    <div>
      {filteredToDo(toDoList, filterType).map((todo) => {
        return <ToDo todo={(todo)} handleToggle={handleToggle} key={todo.id} />;
      })}
      <button style={{ margin: '20px' }} onClick={() => setFilterType(filterTypeEnum.INCOMPLETE)}>
        Clear Completed
      </button>
      <button style={{ margin: '20px' }} onClick={() => setFilterType(filterTypeEnum.COMPLETE)}>
        Show Completed
      </button>
      <button style={{ margin: '20px' }} onClick={() => setFilterType(filterTypeEnum.ALL)}>
        Show All
      </button>
    </div>
  );
};

export default ToDoList;
