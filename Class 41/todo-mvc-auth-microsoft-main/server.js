const express = require('express') //imports express
const app = express() //creates an express object
const mongoose = require('mongoose') //imports mongoose to connect to database
const passport = require('passport') //imports passport to add authorization features
const session = require('express-session') //adds session features to the website, reduces redundant log-ins
const MongoStore = require('connect-mongo')(session) //helps store sessions using mongodb
const connectDB = require('./config/database') //configures some database settings
const authRoutes = require('./routes/auth') //creates route for authorization api
const homeRoutes = require('./routes/home') //creates route for homepage
const todoRoutes = require('./routes/todos') //creates route for user todolist page

require('dotenv').config({path: './config/.env'})//allows for creating environment variables and their use

// Passport config
require('./config/passport')(passport)//configures passport settings and passes the passport object

connectDB() //calling function to connect to our database

app.set('view engine', 'ejs') //ejs will generate views for our website
app.use(express.static('public'))//sets our static folder for get requests
app.use(express.urlencoded({ extended: true })) //allows parsing of requests
app.use(express.json())//allows receipt of json objects to server

// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

  
app.use('/', homeRoutes)//defines url for homeroute
app.use('/auth', authRoutes)//defines url path for authorization routes
app.use('/todos', todoRoutes)//defines url path for user todolist pages
 
//runs server on environment port, logs to console on success
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    