'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Class = require('../constituent.min.js').Class;

exports.ColumnDefs = Class(function () {})
.method("main", function () {
  return [
    {name: "Name", width: 100, pinnedLeft: true},
    {name: "Date Taken", width: 100, pinnedLeft: true},
    {name: "Principal", width: 100},
    {name: "Interest", width: 100},
    {name: "Jan", width: 50},
    {name: "Feb", width: 50},
    {name: "Mar", width: 50},
    {name: "Apr", width: 50},
    {name: "May", width: 50},
    {name: "Jun", width: 50},
    {name: "Jul", width: 50},
    {name: "Aug", width: 50},
    {name: "Sep", width: 50},
    {name: "Oct", width: 50},
    {name: "Nov", width: 50},
    {name: "Dec", width: 50}
  ];
})
.method("collections", function () {
  return [
    {name: "Month", field: "month"},
    {name: "Amount", field: "amount"}
  ];
});
