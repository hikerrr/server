"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Admin = _interopRequireDefault(require("../models/Admin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var notAllowed = function notAllowed(req, res) {
  res.status(405).json({
    status: false,
    msg: 'Method Not Allowed'
  });
};

var getOne = function getOne(req, res) {
  _Admin["default"].findOne({
    username: req.params.username
  }).select('_id username').then(function (admin) {
    if (admin) {
      return res.status(200).json(admin);
    }

    return res.status(404).json({
      status: false,
      msg: 'Content Not Found'
    });
  })["catch"](function (err) {
    return res.status(500).json({
      status: false,
      msg: 'Internal Server Error'
    });
  });
};

var getAll = function getAll(req, res) {
  _Admin["default"].find({}).select('_id username').then(function (admins) {
    if (admins.length) {
      return res.status(200).json(admins);
    }

    return res.status(404).json({
      status: false,
      msg: 'Content Not Found'
    });
  })["catch"](function (err) {
    return res.status(500).json({
      status: false,
      msg: 'Internal Server Error'
    });
  });
};

var addOne = function addOne(req, res) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({
      status: false,
      msg: 'Missing Required Content'
    });
  }

  _Admin["default"].findOne({
    username: req.body.username
  }).then(function (admin) {
    if (admin) {
      return res.status(409).json({
        status: false,
        msg: 'Content Already Exists'
      });
    }

    var newAdmin = new _Admin["default"]({
      username: req.body.username,
      password: req.body.password
    });
    newAdmin.save().then(function (saved) {
      if (saved) {
        return getAll(req, res);
      }

      return res.status(500).json({
        status: false,
        msg: 'Internal Server Error'
      });
    })["catch"](function (err) {
      return res.status(500).json({
        status: false,
        msg: 'Internal Server Error'
      });
    });
  })["catch"](function (err) {
    return res.status(500).json({
      status: false,
      msg: 'Internal Server Error'
    });
  });
};

var updateOne = function updateOne(req, res) {
  if (req.body.username && req.params.username != req.body.username) {
    _Admin["default"].findOne({
      username: req.body.username
    }).then(function (admin) {
      if (admin) {
        return res.status(409).json({
          status: false,
          msg: 'Content Already Exists'
        });
      }

      _Admin["default"].updateOne({
        username: req.params.username
      }, req.body).then(function (updateResult) {
        if (updateResult.nModified) {
          return getAll(req, res);
        }

        return res.status(404).json({
          status: false,
          msg: 'Content Not Found'
        });
      })["catch"](function (err) {
        return res.status(500).json({
          status: false,
          msg: 'Internal Server Error'
        });
      });
    });
  } else {
    _Admin["default"].updateOne({
      username: req.params.username
    }, req.body).then(function (updateResult) {
      if (updateResult.nModified) {
        return getAll(req, res);
      }

      return res.status(404).json({
        status: false,
        msg: 'Content Not Found'
      });
    })["catch"](function (err) {
      return res.status(500).json({
        status: false,
        msg: 'Internal Server Error'
      });
    });
  }
};

var deleteOne = function deleteOne(req, res) {
  _Admin["default"].deleteOne({
    username: req.params.username
  }).then(function (deleteResult) {
    if (deleteResult.deletedCount) {
      return getAll(req, res);
    }

    return res.status(404).json({
      status: false,
      msg: 'Content Not Found'
    });
  })["catch"](function (err) {
    return res.status(500).json({
      status: false,
      msg: 'Internal Server Error'
    });
  });
};

var deleteAll = function deleteAll(req, res) {
  _Admin["default"].remove({}).then(function (deleteResult) {
    if (deleteResult.deletedCount) {
      return res.status(204).json({
        status: true,
        msg: 'Content Deleted'
      });
    }

    return res.status(404).json({
      status: false,
      msg: 'Content Not Found'
    });
  })["catch"](function (err) {
    return res.status(500).json({
      status: false,
      msg: 'Internal Server Error'
    });
  });
}; // 400 bad request (invalid content)
// 401 unauthorized (requires authentication)
// 403 forbidden (not allowed)
// 404 not found
// 405 request method not allowed for given URL
// 409 conflict (data aleady exists)
// 500 internal server error


var _default = {
  getOne: getOne,
  getAll: getAll,
  addOne: addOne,
  updateOne: updateOne,
  deleteOne: deleteOne,
  deleteAll: deleteAll,
  notAllowed: notAllowed
};
exports["default"] = _default;