"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _json2csv = require("json2csv");

var _Tour = _interopRequireDefault(require("../models/Tour"));

var _Booking = _interopRequireDefault(require("../models/Booking"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var notAllowed = function notAllowed(req, res) {
  res.status(405).json({
    status: false,
    msg: 'Method Not Allowed'
  });
};

var getAllBookings = function getAllBookings(req, res) {
  _Booking["default"].find({
    title: req.params.linkName
  }).then(function (bookings) {
    if (bookings.length) {
      if (req.query.format && req.query.format === 'csv') {
        var fields = ['firstName', 'lastName', 'phone', 'email', 'gender', 'departure', 'discountCode'];
        var data = [];

        for (var i = 0; i < bookings.length; i++) {
          var entry = {};

          for (var j = 0; j < fields.length; j += 1) {
            entry[fields[j]] = bookings[i][fields[j]];
          }

          data.push(entry);
        }

        res.setHeader('Content-disposition', 'attachment; filename=bookings.csv');
        res.set('Content-Type', 'text/csv');
        res.status(200).send((0, _json2csv.parse)(data, {
          fields: fields
        }));
      } else {
        res.status(200).json(bookings);
      }
    }
  })["catch"](function (err) {
    res.status(500).json({
      status: false,
      msg: 'Internal Server Error',
      err: err
    });
  });
};

var getOne = function getOne(req, res) {
  _Tour["default"].findOne({
    linkName: req.params.linkName
  }).then(function (tour) {
    if (tour) {
      return res.status(200).json(tour);
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
  _Tour["default"].find({}).then(function (tours) {
    if (tours.length) {
      return res.status(200).json(tours);
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
  if (!req.body.linkName || !req.body.heading || !req.body.caption) {
    return res.status(400).json({
      status: false,
      msg: 'Missing Required Content'
    });
  }

  _Tour["default"].findOne({
    linkName: req.body.linkName
  }).then(function (tour) {
    if (tour) {
      return res.status(409).json({
        status: false,
        msg: 'Content Already Exists'
      });
    }

    var newTour = new _Tour["default"]({
      linkName: req.body.linkName,
      heading: req.body.heading,
      caption: req.body.caption,
      imageName: req.body.imageName || '',
      imageCaption: req.body.imageCaption || '',
      holidayLength: req.body.holidayLength,
      holidayType: req.body.holidayType,
      bestTimeToGo: req.body.bestTimeToGo,
      priceMin: req.body.priceMin,
      priceMax: req.body.priceMax,
      itinerary: req.body.itinerary || [],
      formImage: req.body.formImage,
      status: req.body.status,
      departures: req.body.departures || [],
      highlightsImages: req.body.highlightsImages || [],
      highlightsCaption: req.body.highlightsCaption || ''
    });
    newTour.save().then(function (saved) {
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
        msg: 'Internal Server Error',
        err: err
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
  if (req.body.linkName && req.params.linkName != req.body.linkName) {
    _Tour["default"].findOne({
      linkName: req.body.linkName
    }).then(function (tour) {
      if (tour) {
        return res.status(409).json({
          status: false,
          msg: 'Content Already Exists'
        });
      }

      _Tour["default"].updateOne({
        linkName: req.params.linkName
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
    _Tour["default"].updateOne({
      linkName: req.params.linkName
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
  _Tour["default"].deleteOne({
    linkName: req.params.linkName
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
  _Tour["default"].remove({}).then(function (deleteResult) {
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
  notAllowed: notAllowed,
  getAllBookings: getAllBookings
};
exports["default"] = _default;