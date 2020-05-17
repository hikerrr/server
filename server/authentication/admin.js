const adminAuth = (req, res, next) => {
  if (req.session.visits) {
    req.session.visits += 1;
  } else {
    req.session.visits = 1;
  }
  next();
};

module.exports = adminAuth;
