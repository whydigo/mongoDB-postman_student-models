const express = require('express');
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(require('./routes/index'));
mongoose.connect('mongodb+srv://into:code@cluster0.j4zfi0t.mongodb.net/btc?retryWrites=true&w=majority', 
() => {
  console.log('connected')
  app.listen(3000, () => {
    console.log('Сервер запущен успешно')
  })
},
)