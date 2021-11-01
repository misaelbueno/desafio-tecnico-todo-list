const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('DESAFIO TÉCNICO');
});

app.listen(3000, () => {
  console.log('Ouvindo na porta 3000');
});
