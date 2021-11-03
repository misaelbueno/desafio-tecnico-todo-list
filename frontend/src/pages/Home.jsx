import React, { useEffect, useState } from "react";
import InputTask from "../components/InputTask";
import TaskCard from "../components/TaskCard";

import { io } from 'socket.io-client';

const socket = io('http://localhost:3001')

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3001/tasks')
      .then((response) => response.json())
      .then((arrayTasks) => {
        console.log(arrayTasks)
        setIsLoading(false);
        setTasks(arrayTasks);
      })
  }, []);

  socket.on('refreshTasks', (listTask) => {
    console.log(listTask)
    setTasks(listTask);
  })

  return(
    <div>
      { console.log("renderizou home") }
      <h1>ToDo List</h1>
      <InputTask />
      { isLoading ? (
        <p>Carregando... </p>
      ) : (
        <div>
          { tasks.map(({ _id, task, status }) => (
            <TaskCard
              id={_id}
              task={task}
              status={status}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home;
