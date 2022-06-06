const mongoose = require('mongoose') //allows use of mongoose framework

const connectDB = async () => { //creates async function
  try {
    //attempts connection to database
    const conn = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)//on success log to console
  } catch (err) {//catches errors
    console.error(err)//logs error to console
    process.exit(1)//exits
  }
}

module.exports = connectDB //exports code for use elsewhere
