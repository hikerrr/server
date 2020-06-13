"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var listAll = function listAll(req, res) {
  var data = {
    title: 'Terms & Conditions',
    navColor: 'var(--color-dark)',
    imageUrl: process.env.AWS_IMAGE_URL
  };
  res.render('terms', {
    data: data
  });
};

var _default = {
  listAll: listAll
};
exports["default"] = _default;