const Todo = require('../models/Todo')//allows access to schema for creating and updating list items

module.exports = {
    getTodos: async (req,res)=>{//handles get request for user's list items
        console.log(req.user)//logs user to console
        try{
            //Do we want to grab all the todos?
            const todoItems = await Todo.find({microsoftId: req.user.microsoftId})
            //How can we grab our logged in users left to dos?
            const itemsLeft = await Todo.countDocuments({microsoftId: req.user.microsoftId, completed: false})
            //uses info from database to render dashboard webpage and send in response
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err) //logs any caught errors in console
        }
    },
    createTodo: async (req, res)=>{ //used to create new list item for a user
        try{
            //uses schema and info from request to create a new list item
            await Todo.create({todo: req.body.todoItem, completed: false, microsoftId: req.user.microsoftId})
            console.log('Todo has been added!') //logs success to server console
            res.redirect('/todos') //redirects to user dashboard on success
        }catch(err){
            console.log(err) //logs any caught errors in console
        }
    },
    markComplete: async (req, res)=>{ //updates user list item to complete
        try{
            //finds and updates list item in database
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete') //logs success in server console
            res.json('Marked Complete') //send json response to client
        }catch(err){
            console.log(err) //logs any caught errors to server console
        }
    },
    markIncomplete: async (req, res)=>{ //updates user list item to incomplete
        try{
            //finds list item by ID and updates item in database
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete') //logs success in server console
            res.json('Marked Incomplete') //send response to client as json
        }catch(err){
            console.log(err) //logs error to server console
        }
    },
    deleteTodo: async (req, res)=>{ //handles delete request for list item
        console.log(req.body.todoIdFromJSFile)//logs item ID to console
        try{
            //finds and deletes list item by ID
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo') //logs success to server console
            res.json('Deleted It') //sends json response to client
        }catch(err){
            console.log(err)//logs any caught errors
        }
    }
}    