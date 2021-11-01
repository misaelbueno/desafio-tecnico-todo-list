const express = require('express');
const cors = require('cors');
const TaskController = require('./controller/TaskController');

const app = express();
app.use(cors());

const PORT = 3000;

app.get('/', TaskController.getAll);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
