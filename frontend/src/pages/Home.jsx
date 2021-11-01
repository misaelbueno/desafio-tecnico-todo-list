import React, { useEffect, useState } from "react";
import Tasks from "../components/Tasks";

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
      { isLoading ? (
        <p>Carregando... </p>
      ) : (
        <div>
          { tasks.map(({ task, status }, index) => (
            <Tasks 
              index={index}
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
