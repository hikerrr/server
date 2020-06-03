"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var listAll = function listAll(req, res) {
  var data = {
    title: 'Careers',
    navColor: 'var(--color-dark)'
  };
  res.render('careers', {
    data: data
  });
};

var _default = {
  listAll: listAll
};
exports["default"] = _default;