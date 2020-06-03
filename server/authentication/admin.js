// needed by babel for async and generator functions of ES6
import regeneratorRuntime from 'regenerator-runtime';

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
      .catch((error) => {
        req.session.destroy();
        res.redirect('/admin/login');
      });
  } else {
    console.log(1);
    res.redirect('/admin/login');
  }
};

export default adminAuth;
