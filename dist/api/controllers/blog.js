"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Blog = _interopRequireDefault(require("../models/Blog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var notAllowed = function notAllowed(req, res) {
  res.status(405).json({
    status: false,
    msg: 'Method Not Allowed'
  });
};

var getOne = function getOne(req, res) {
  _Blog["default"].findOne({
    linkName: req.params.linkName
  }).then(function (blog) {
    if (blog) {
      return res.status(200).json(blog);
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
  _Blog["default"].find({}).then(function (blogs) {
    if (blogs.length) {
      return res.status(200).json(blogs);
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
  if (!req.body.linkName || !req.body.author || !req.body.title || !req.body.content) {
    return res.status(400).json({
      status: false,
      msg: 'Missing Required Content'
    });
  }

  _Blog["default"].findOne({
    linkName: req.body.linkName
  }).then(function (blog) {
    if (blog) {
      return res.status(409).json({
        status: false,
        msg: 'Content Already Exists'
      });
    }

    var newBlog = new _Blog["default"]({
      linkName: req.body.linkName,
      author: req.body.author,
      title: req.body.title,
      imageName: req.body.imageName || '',
      imageCaption: req.body.imageCaption || '',
      content: req.body.content,
      readTime: req.body.readTime || 0,
      writingDate: req.body.writingDate || Date.now()
    });
    newBlog.save().then(function (saved) {
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
    _Blog["default"].findOne({
      linkName: req.body.linkName
    }).then(function (blog) {
      if (blog) {
        return res.status(409).json({
          status: false,
          msg: 'Content Already Exists'
        });
      }

      _Blog["default"].updateOne({
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
    _Blog["default"].updateOne({
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
  _Blog["default"].deleteOne({
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
  _Blog["default"].remove({}).then(function (deleteResult) {
    if (deleteResult.deletedCount) {
      return res.status(204).json(getAll(req, res));
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