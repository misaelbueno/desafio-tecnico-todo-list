import React from 'react';

import { io } from 'socket.io-client';

const socket = io('http://localhost:3001')

function TaskCard({ id, task, status }) {

  const handleClick = () => {
    socket.emit('changeStatus', { id })
  }

  return (
    <div>
      <ul>  
        <li>
          <p><b>Task:</b> { task }</p>
          {/* <button onClick={handleClick}><b>status:</b> {status}</button> */}
          <span><b>status:</b> </span>
          <select>
            <option>pendente</option>
            <option>em andamento</option>
            <option>pronto</option>
          </select>
        </li>
      </ul>
      
    </div>
  )
}

export default TaskCard;
