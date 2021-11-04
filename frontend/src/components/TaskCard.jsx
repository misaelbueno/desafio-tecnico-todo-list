import React, { useState } from 'react';

import socket from '../utils/socketClient';

function TaskCard({ id, task, status }) {
  // const [currentStatus, setCurrentStatus] = useState(status)

  const handleChange = (event) => {
    const newStatus = event.target.value;
    socket.emit('changeStatus', { id, newStatus })
  }

  const deleteTask = () => {
    socket.emit('deleteTask', { id })
  }

  return (
    <div>
      <ul>  
        <li>
          <p><b>Task:</b> { task }</p>
          <label>
            status: 
           <select value={ status } onChange={ handleChange }>
              <option value="pendente">pendente</option>
              <option value="em andamento">em andamento</option>
              <option value="pronto">pronto</option>
            </select>
          </label>
        </li>
        <button onClick={ deleteTask }>Excluir</button>
      </ul>
      
    </div>
  )
}

export default TaskCard;
