const express = require('express') //allows use of express
const router = express.Router() //uses express' router framework
const homeController = require('../controllers/home') //uses a controller to access database

router.get('/', homeController.getIndex) //handles home route, renders homepage

module.exports = router //exports code to main server