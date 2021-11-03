import React, { useEffect, useState } from "react";
import InputTask from "../components/InputTask";
import TaskCard from "../components/TaskCard";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3001/tasks')
      .then((response) => response.json())
      .then((arrayTasks) => {
        setIsLoading(false);
        setTasks(arrayTasks);
      })
  }, []);

  return(
    <div>
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
