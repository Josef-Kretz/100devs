const mongoose = require('mongoose') //allows use of mongoose framework
//define scheme for creating ToDo objects
const TodoSchema = new mongoose.Schema({ //creates new schema
  todo: { //sets key name
    type: String, //value type of string
    required: true, //value is required or throws error
  },
  completed: {//key name
    type: Boolean, //value type of bool
    required: true, //value is required or throws error
  },
  microsoftId: { //key name
    type: String, //value type of string
    required: true //if value not provided, throw error
  }
})

module.exports = mongoose.model('Todo', TodoSchema) //exports schema for use in server
