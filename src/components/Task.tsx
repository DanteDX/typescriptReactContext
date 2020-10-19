import React from "react";
interface DemoTask {
  tasks: string[];
  handleDelete: (str: string) => void;
}

const Task: React.FC<DemoTask> = ({ tasks, handleDelete }) => {
  const taskList = tasks.map((each) => {
    return (
      <li key={Math.random()}>
        {each}
        <button onClick={(e) => handleDelete(each)}>Delete</button>
      </li>
    );
  });
  return <ul>{taskList}</ul>;
};

export default Task;
