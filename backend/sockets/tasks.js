const TaskModel = require('../model/TaskModel');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('addTask', async ({ newTask }) => {
    await TaskModel.createTask(newTask);
    const newListTasks = await TaskModel.getAll();
    io.emit('refreshTasks', newListTasks);
  });

  socket.on('deleteTask', async ({ id }) => {
    await TaskModel.excludeTask(id);
    const newListTasks = await TaskModel.getAll();
    io.emit('refreshTasks', newListTasks);    
  });
});
