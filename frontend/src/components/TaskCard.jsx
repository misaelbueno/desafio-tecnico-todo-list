import React, { useState } from 'react';

import { io } from 'socket.io-client';

const socket = io('http://localhost:3001')

function TaskCard({ id, task, status }) {
  const [currentStatus, setCurrentStatus] = useState(status)

  const handleChange = (event) => {
    const newStatus = event.target.value;
    socket.emit('changeStatus', { id, newStatus })
    setCurrentStatus(newStatus);
  }

  return (
    <div>
      <ul>  
        <li>
          <p><b>Task:</b> { task }</p>
          <label>
            status: 
           <select value={ currentStatus } onChange={ handleChange }>
              <option value="pendente">pendente</option>
              <option value="em andamento">em andamento</option>
              <option value="pronto">pronto</option>
            </select>
          </label>
        </li>
      </ul>
      
    </div>
  )
}

export default TaskCard;
