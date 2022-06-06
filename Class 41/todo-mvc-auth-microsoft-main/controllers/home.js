module.exports = { //exports code for user elsewhere in server
    getIndex: (req,res)=>{ //creates function name getIndex that takes a request and a response object
        res.render('index.ejs') //sends a rendered html file as a response
    }
}