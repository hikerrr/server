"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Booking = _interopRequireDefault(require("../models/Booking"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var notAllowed = function notAllowed(req, res) {
  res.status(405).json({
    status: false,
    msg: 'Method Not Allowed'
  });
};

var getOne = function getOne(req, res) {
  _Booking["default"].findOne({
    _id: req.params._id
  }).then(function (booking) {
    if (booking) {
      return res.status(200).json(booking);
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
  _Booking["default"].find({}).then(function (bookings) {
    if (bookings.length) {
      return res.status(200).json(bookings);
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
  if (!req.body.title || !req.body.firstName || !req.body.lastName || !req.body.phone || !req.body.gender || !req.body.email || !req.body.departure) {
    return res.status(400).json({
      status: false,
      msg: 'Missing Required Content'
    });
  }

  _Booking["default"].findOne({
    title: req.body.title,
    phone: req.body.phone
  }).then(function (booking) {
    if (booking) {
      return res.status(409).json({
        status: false,
        msg: 'Content Already Exists'
      });
    }

    var newBooking = new _Booking["default"]({
      title: req.body.title,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      gender: req.body.gender,
      departure: req.body.departure,
      discountCode: req.body.discountCode || 'NA'
    });
    newBooking.save().then(function (saved) {
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
  if (req.body.title || req.body.phone) {
    var query = {};
    if (req.body.title) query.title = req.body.title;
    if (req.body.phone) query.phone = req.body.phone;

    _Booking["default"].findOne(query).then(function (booking) {
      if (booking && booking._id != req.params._id) {
        return res.status(409).json({
          status: false,
          msg: 'Content Already Exists'
        });
      }

      _Booking["default"].updateOne({
        _id: req.params._id
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
    _Booking["default"].updateOne({
      _id: req.params._id
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
  _Booking["default"].deleteOne({
    _id: req.params._id
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
  _Booking["default"].remove({}).then(function (deleteResult) {
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