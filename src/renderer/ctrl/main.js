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

  this.select(this.financers[0]);
}

exports.MainCtrl = Class(MainCtrl)
.method("select", function(financer) {
  this.selected = financer;
})
