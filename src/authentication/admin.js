import Admin from '../api/models/Admin';

const adminAuth = (req, res, next) => {
  if (req.session.username) {
    Admin.findOne({username: req.session.username})
      .then((admin) => {
        if (admin) {
          next();
        } else {
          req.session.destroy();
          res.redirect('/admin/login');
        }
      })
      .catch(() => {
        req.session.destroy();
        res.redirect('/admin/login');
      });
  } else {
    res.redirect('/admin/login');
  }
};

export default adminAuth;
