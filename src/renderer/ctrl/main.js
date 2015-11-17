'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Class = require("../constituent.min.js").Class;

function MainCtrl ($scope, moment) {
  $scope.main = this;

  this.today = moment();

  this.year = this.today.year();
  this.financers = [
    {
      id: 1,
      name: "Financer 1"
    },
    {
      id: 2,
      name: "Financer 2"
    },
    {
      id: 3,
      name: "Financer 3"
    }
  ];

  this.selected = this.financers[0];

  $scope.$watch("main.selected", this.onFinancerChange);
  $scope.$watch("main.year", this.onYearChange);
}

exports.MainCtrl = Class(MainCtrl)
.method("onFinancerChange", function(newValue, oldValue) {
  console.log("oldValue", oldValue);
  console.log("newValue", newValue);
})
.method("onYearChange", function(newValue, oldValue) {
  console.log("oldValue", oldValue);
  console.log("newValue", newValue);
})
