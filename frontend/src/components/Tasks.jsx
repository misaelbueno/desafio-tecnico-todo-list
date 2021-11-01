import React from 'react';

function Tasks({ index, task, status }) {
  return (
    <div>
      <ul>  
        <li>
          <p><b>Task:</b> { task }</p>
          <span><b>status:</b> {status}</span>
        </li>
      </ul>
      
    </div>
  )
}

export default Tasks;
