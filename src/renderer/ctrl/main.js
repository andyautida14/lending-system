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

  this.unpaidGridOptions = {
    columnDefs: [
      {name: "Name", width: 200, pinnedLeft: true},
      {name: "Date Taken", width: 200, pinnedLeft: true},
      {name: "Principal", width: 50, pinnedLeft: true},
      {name: "Interest", width: 50, pinnedLeft: true},
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
    ]
  }

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
