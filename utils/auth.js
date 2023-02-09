const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  //kicks them back to login if it doesnt pass auth


//exports
  module.exports = withAuth;