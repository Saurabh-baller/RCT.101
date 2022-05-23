import React from "react";

import styles from "./taskApp.module.css";

import TaskHeader from "./TaskHeader/TaskHeader";
import AddTask from "./AddTask/AddTask.jsx";
import Tasks from "./Tasks/Tasks";
import {useState} from "react";


const TaskApp = () => {
  const[todos, setTodos] = useState([]);

  const addTodo = (newTodo) =>{

    setTodos([...todos, newTodo]);
  }

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader/>
      {/* Add Task */}
       <AddTask addTodos={addTodo}/>
      {/* Tasks */}
      <Tasks todos={todos}/>
    </div>
  );
};

export default TaskApp;
