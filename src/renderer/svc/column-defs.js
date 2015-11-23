'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Class = require('../constituent.min.js').Class;

exports.ColumnDefs = Class(function () {})
.method("main", function () {
  return [
    {name: "Name", width: 150, pinnedLeft: true},
    {name: "Date Taken", width: 150, pinnedLeft: true},
    {name: "Principal", width: 150},
    {name: "Interest", width: 150},
    {name: "Jan", width: 75},
    {name: "Feb", width: 75},
    {name: "Mar", width: 75},
    {name: "Apr", width: 75},
    {name: "May", width: 75},
    {name: "Jun", width: 75},
    {name: "Jul", width: 75},
    {name: "Aug", width: 75},
    {name: "Sep", width: 75},
    {name: "Oct", width: 75},
    {name: "Nov", width: 75},
    {name: "Dec", width: 75}
  ];
})
.method("collections", function () {
  return [
    {name: "Month", field: "month"},
    {name: "Amount", field: "amount"}
  ];
});
