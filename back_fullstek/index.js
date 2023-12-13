const express = require("express");
const mongoose = require('mongoose') ;
const app = express()
const cors = require('cors')
const port = 4000 ;

app.use(cors())
app.use(express.json());
app.use(require('./router/todo.router'));

mongoose.connect("mongodb+srv://sheikh2003:Seida59522@cluster0.jqbmwip.mongodb.net/fullstek", {
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))
  
  app.listen(port, () => {
    console.log(`Сервер запущен успешно http://localhost:${port}`) 
  })