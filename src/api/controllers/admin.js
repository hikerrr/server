import Admin from '../models/Admin';

const notAllowed = (req, res) => {
  res.status(405).json({status: false, msg: 'Method Not Allowed'});
};

const getOne = (req, res) => {
  Admin.findOne({username: req.params.username})
    .select('_id username')
    .then((admin) => {
      if (admin) {
        return res.status(200).json(admin);
      }

      return res.status(404).json({status: false, msg: 'Content Not Found'});
    })
    .catch((err) =>
      res.status(500).json({status: false, msg: 'Internal Server Error'})
    );
};

const getAll = (req, res) => {
  Admin.find({})
    .select('_id username')
    .then((admins) => {
      if (admins.length) {
        return res.status(200).json(admins);
      }

      return res.status(404).json({status: false, msg: 'Content Not Found'});
    })
    .catch((err) =>
      res.status(500).json({status: false, msg: 'Internal Server Error'})
    );
};

const addOne = (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res
      .status(400)
      .json({status: false, msg: 'Missing Required Content'});
  }

  Admin.findOne({username: req.body.username})
    .then((admin) => {
      if (admin) {
        return res
          .status(409)
          .json({status: false, msg: 'Content Already Exists'});
      }

      const newAdmin = new Admin({
        username: req.body.username,
        password: req.body.password,
      });

      newAdmin
        .save()
        .then((saved) => {
          if (saved) {
            return getAll(req, res);
          }

          return res
            .status(500)
            .json({status: false, msg: 'Internal Server Error'});
        })
        .catch((err) =>
          res.status(500).json({status: false, msg: 'Internal Server Error'})
        );
    })
    .catch((err) =>
      res.status(500).json({status: false, msg: 'Internal Server Error'})
    );
};

const updateOne = (req, res) => {
  if (req.body.username && req.params.username != req.body.username) {
    Admin.findOne({username: req.body.username}).then((admin) => {
      if (admin) {
        return res
          .status(409)
          .json({status: false, msg: 'Content Already Exists'});
      }

      Admin.updateOne({username: req.params.username}, req.body)
        .then((updateResult) => {
          if (updateResult.nModified) {
            return getAll(req, res);
          }

          return res
            .status(404)
            .json({status: false, msg: 'Content Not Found'});
        })
        .catch((err) =>
          res.status(500).json({status: false, msg: 'Internal Server Error'})
        );
    });
  } else {
    Admin.updateOne({username: req.params.username}, req.body)
      .then((updateResult) => {
        if (updateResult.nModified) {
          return getAll(req, res);
        }

        return res.status(404).json({status: false, msg: 'Content Not Found'});
      })
      .catch((err) =>
        res.status(500).json({status: false, msg: 'Internal Server Error'})
      );
  }
};

const deleteOne = (req, res) => {
  Admin.deleteOne({username: req.params.username})
    .then((deleteResult) => {
      if (deleteResult.deletedCount) {
        return getAll(req, res);
      }
      return res.status(404).json({status: false, msg: 'Content Not Found'});
    })
    .catch((err) =>
      res.status(500).json({status: false, msg: 'Internal Server Error'})
    );
};

const deleteAll = (req, res) => {
  Admin.remove({})
    .then((deleteResult) => {
      if (deleteResult.deletedCount) {
        return res.status(204).json({status: true, msg: 'Content Deleted'});
      }

      return res.status(404).json({status: false, msg: 'Content Not Found'});
    })
    .catch((err) =>
      res.status(500).json({status: false, msg: 'Internal Server Error'})
    );
};

// 400 bad request (invalid content)
// 401 unauthorized (requires authentication)
// 403 forbidden (not allowed)
// 404 not found
// 405 request method not allowed for given URL
// 409 conflict (data aleady exists)
// 500 internal server error

export default {
  getOne,
  getAll,
  addOne,
  updateOne,
  deleteOne,
  deleteAll,
  notAllowed,
};
