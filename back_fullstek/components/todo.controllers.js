const todo = require("../models/Todo.model");

module.exports.todoController = {
  
  postTodo : (req, res) => {
    todo.create({
      title: req.body.title ,
    }).then((data) => {
      res.json(data)
    })
},

  getTodo : (req, res) => {
   todo.find().then((data) => {
    res.json(data)
   })

  },
 
  deleteTodo: (req, res) =>{
    todo.findByIdAndDelete(req.params.id).then((data) => {
      res.json(data)
  });
  },
    
  patchTodo : (req, res) =>{
    todo.findByIdAndUpdate(req.params.id, {title: req.body.completed}).then(() => {
      res.json('Имя изменен')
    }
    )
  }

  }