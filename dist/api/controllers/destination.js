"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Destination = _interopRequireDefault(require("../models/Destination"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var notAllowed = function notAllowed(req, res) {
  res.status(405).json({
    status: false,
    msg: 'Method Not Allowed'
  });
};

var getOne = function getOne(req, res) {
  _Destination["default"].findOne({
    linkName: req.params.linkName
  }).populate({
    path: 'cities',
    model: 'City'
  }).then(function (destination) {
    if (destination) {
      return res.status(200).json(destination);
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
  _Destination["default"].find({}).populate({
    path: 'cities',
    model: 'City'
  }).then(function (destinations) {
    if (destinations.length) {
      return res.status(200).json(destinations);
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

  _Destination["default"].findOne({
    linkName: req.body.linkName
  }).then(function (destination) {
    if (destination) {
      return res.status(409).json({
        status: false,
        msg: 'Content Already Exists'
      });
    }

    var newDestination = new _Destination["default"]({
      linkName: req.body.linkName,
      heading: req.body.heading,
      caption: req.body.caption,
      imageName: req.body.imageName || '',
      imageCaption: req.body.imageCaption || '',
      cities: req.body.cities || []
    });
    newDestination.save().then(function (saved) {
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
  if (req.body.linkName && req.params.linkName != req.body.linkName) {
    _Destination["default"].findOne({
      linkName: req.body.linkName
    }).then(function (destination) {
      if (destination) {
        return res.status(409).json({
          status: false,
          msg: 'Content Already Exists'
        });
      }

      if (!req.body.cities) req.body.cities = [];

      _Destination["default"].updateOne({
        linkName: req.params.linkName
      }, req.body, {
        $set: {
          cities: req.body.cities
        }
      }).then(function (updateResult) {
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
    if (!req.body.cities) req.body.cities = [];

    _Destination["default"].updateOne({
      linkName: req.params.linkName
    }, req.body, {
      $set: {
        cities: req.body.cities
      }
    }).then(function (updateResult) {
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
  _Destination["default"].deleteOne({
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
  _Destination["default"].remove({}).then(function (deleteResult) {
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