import React, { useState } from 'react';

import socket from '../utils/socketClient';

function InputTask() {
  const [newTask, setNewTask] = useState('');

  const handleClick = () => {
    // console.log(newTask)
    socket.emit('addTask', { newTask });
  }

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  return (
    <div>
      <label htmlFor="id-task">
        New Task
        <input
          id="id-task"
          type="text"
          onChange={ handleChange }/>
      </label>
      <button
        onClick={ handleClick }
        type="button"
      >
        Enviar
      </button>
    </div>
  )
}


export default InputTask;
