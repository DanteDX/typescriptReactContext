import React,{useState} from 'react';
import Form from './components/Form';
import Task from './components/Task';

const App = () => {
  const [tasks,setTask] = useState<string[]>([]);
  const propForm = (currentTask:string) =>{
    setTask([...tasks,currentTask]);
  }
  const handleDelete = (task:string) =>{
    setTask(tasks.filter(each => each!==task));
  }
  return (
    <div className="App">
      <Form propForm={propForm}/>
      <h1>Hello</h1>
      <Task tasks={tasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
