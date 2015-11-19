'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Class = require("../constituent.min.js").Class;

function MainCtrl ($scope, moment, Menu, Financers) {
  Menu.setup();

  $scope.main = this;
  this.today = moment();
  this.year = this.today.year();

  $scope.$watch("main.selected", this.onFinancerChange);
  $scope.$watch("main.year", this.onYearChange);

  this.getFinancers($scope, Financers);
}

exports.MainCtrl = Class(MainCtrl)
.method("getFinancers", function($scope, Financers) {
  Financers.getAll().then(function(financers) {
    if (financers.length) {
      $scope.$apply(function() {
        $scope.main.financers = financers;
        $scope.main.selected = financers[0];
      });
    }
  });
})
.method("onFinancerChange", function(newValue, oldValue) {
  console.log("oldValue", oldValue);
  console.log("newValue", newValue);
})
.method("onYearChange", function(newValue, oldValue) {
  console.log("oldValue", oldValue);
  console.log("newValue", newValue);
})
.method("onNewDue", function() {
  console.log("onNewDue");
})
