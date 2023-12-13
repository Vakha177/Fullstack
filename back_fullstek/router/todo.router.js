const { Router } = require('express')
const {todoController} = require('../components/todo.controllers')

const router = Router()

router.get('/todo',todoController.getTodo)
router.post('/todos',todoController.postTodo)
router.patch('/todos/:id',todoController.patchTodo)
router.delete('/todos/:id',todoController.deleteTodo)

module.exports = router