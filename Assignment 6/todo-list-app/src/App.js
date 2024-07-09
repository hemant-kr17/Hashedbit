import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task.trim()].sort());
      setTask('');
    }
  };

  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter(t => t !== taskToRemove));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Enter a new task" 
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} 
            <button onClick={() => removeTask(task)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
