import React, { useState } from 'react';

import socket from '../utils/socketClient';

function InputTask() {
  const [newTask, setNewTask] = useState('');
  const [valueInput, setValueInput] = useState('');
  const [currentTask, setCurrentTask] = useState('');

  const handleClick = () => {
    socket.emit('addTask', { newTask });
    setCurrentTask(valueInput);
    setValueInput('');
  }

  const handleChange = (event) => {
    setNewTask(event.target.value);
    setValueInput(event.target.value);
  }

  return (
    <div>
      <label htmlFor="id-task">
        New Task
        <input
          id="id-task"
          type="text"
          value={ valueInput }
          onChange={ handleChange }/>
      </label>
      <button
        onClick={ handleClick }
        type="button"
        data-testid="id-send"
      >
        Enviar
      </button>
      <p data-testid="id-task" >{ currentTask }</p>
    </div>
  )
}


export default InputTask;
