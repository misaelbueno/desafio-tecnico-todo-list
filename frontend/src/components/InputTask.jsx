import React, { useState } from 'react';

import { io } from 'socket.io-client';

const socket = io('http://localhost:3001')

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
      <label>
        Task
        <input type="text" onChange={ handleChange }/>
        <button onClick={ handleClick } type="button">Enviar</button>
      </label>
    </div>
  )
}


export default InputTask;
