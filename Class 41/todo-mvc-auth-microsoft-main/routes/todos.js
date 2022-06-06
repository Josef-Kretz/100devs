const express = require('express') //allows use of express framework
const router = express.Router() //allows use of express' router framework
const todosController = require('../controllers/todos') //uses controller to access database
const { ensureAuth, ensureGuest } = require('../middleware/auth') //uses middleware to check authorization of user

router.get('/', ensureAuth, todosController.getTodos) //ensures user is logged in before accessing ToDoList

router.post('/createTodo', todosController.createTodo) //handles the request to create a new list item

router.put('/markComplete', todosController.markComplete) //handles the request to update a list item as complete

router.put('/markIncomplete', todosController.markIncomplete) //handles the request to update a list item as incomplete

router.delete('/deleteTodo', todosController.deleteTodo) //handles the delete request to delete a list item

module.exports = router //exports code to main server