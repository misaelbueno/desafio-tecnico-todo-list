const TaskModel = require('../model/TaskModel');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('changeStatus', async ({ id, newStatus }) => {
    // console.log(`id do status: ${id}`);
    await TaskModel.updateStatus(id, newStatus);
    const newListTasks = await TaskModel.getAll();
    io.emit('refreshTasks', newListTasks);
  });
});
