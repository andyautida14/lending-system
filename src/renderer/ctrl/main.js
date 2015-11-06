'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Class = require("../constituent.min.js").Class;

exports.MainCtrl = Class(function($scope, moment) {
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

  console.log("here");
})
.method("select", function(financer) {
  console.log(financer);
  this.selected = financer;
})
