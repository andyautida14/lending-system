'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Class = require('../constituent.min.js').Class;

exports.Financers = Class(function(_financers) {
  this._financers = _financers;
})
.method("getAll", function() {
  return this._financers.findAll({attributes: ["id", "name"]});
})
