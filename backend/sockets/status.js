module.exports = (io) => io.on('connection', (socket) => {
  socket.on('changeStatus', ({ id }) => {
    console.log(`id do status: ${id}`);
  });
});
