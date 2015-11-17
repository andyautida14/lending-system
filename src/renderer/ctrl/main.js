'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Class = require("../constituent.min.js").Class;

function MainCtrl ($scope, moment, Financers) {
  $scope.main = this;

  this.today = moment();

  this.year = this.today.year();

  Financers.getAll().then(function(financers) {
    console.log(financers);
    $scope.main.financers = financers;
    if (financers.length) {
      $scope.main.selected = financers[0];
    }
  });
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
