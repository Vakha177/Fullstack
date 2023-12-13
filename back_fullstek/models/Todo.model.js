const mongoose = require('mongoose')

const todoSchema = mongoose.Schema ({
   id:Number ,
   userId: Number ,
   title: String , 
   completed: {
    type: Boolean,
    default: false
   }
})


const todo = mongoose.model('todo' , todoSchema) ; 

module.exports = todo