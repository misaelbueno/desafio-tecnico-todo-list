const express = require('express');
const cors = require('cors');
const TaskController = require('./controller/TaskController');

const app = express();
const http = require('http').createServer(app); // cria o servidor para o socket rodar
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // endereço em que o socket vai aceitar requisições
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }
})

app.use(express.json());
app.use(cors());

require('./sockets/status')(io);
require('./sockets/tasks')(io);


const PORT = 3001;

app.use('/tasks', TaskController);

http.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
