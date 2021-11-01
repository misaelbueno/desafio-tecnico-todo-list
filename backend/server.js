const express = require('express');
const cors = require('cors');
const TaskController = require('./controller/TaskController');

const app = express();
app.use(cors());

const PORT = 3001;

app.use('/tasks', TaskController);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
