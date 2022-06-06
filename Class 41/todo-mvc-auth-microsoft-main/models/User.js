const mongoose = require('mongoose') //allows use of mongoose framework
//creates and stores new user object
const UserSchema = new mongoose.Schema({ //creates new schema
  microsoftId: { //sets key name
    type: String, //value type of string
    required: true, //value is required
  },
  displayName: { //sets key name 
    type: String, //value type of string
    required: true,//a value is required
  }
})

module.exports = mongoose.model('User', UserSchema) //exports code for user in other server files
