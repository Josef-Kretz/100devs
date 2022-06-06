module.exports = { //exports code for user elsewhere in server
    ensureAuth: function (req, res, next) { //function to ensure user is logged in
      if (req.isAuthenticated()) { //checks if user is logged in
        return next() //if logged in, allow user to proceed
      } else {
        res.redirect('/') //redirects to homepage if not logged in
      }
    },
    ensureGuest: function (req, res, next) {//function to ensure user if logged out
      if (!req.isAuthenticated()) { //checks if user is not logged in
        return next(); //if user is not logged in, allow access to homepage
      } else {
        res.redirect('/dashboard'); //redirects logged in users to their dashboard
      }
    },
  }
  