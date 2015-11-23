'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Class = require("../constituent.min.js").Class;

function MainCtrl ($scope, moment, Menu, ColumnDefs, Financers, SampleData) {
  Menu.setup();

  $scope.main = this;
  this.$scope = $scope;

  this.today = moment();
  this.year = this.today.year();

  this.unpaidGridOptions = {
    columnDefs: ColumnDefs.main()
  };

  this.paidGridOptions = {
    columnDefs: ColumnDefs.main()
  };

  this.interestYear = this.partialYear = this.fullYear = this.year;
  this.interestGridOptions = this.partialGridOptions = this.fullGridOptions = {
    columnDefs: ColumnDefs.collections(),
    data: SampleData.collections()
  };

  $scope.$watch("main.selected", this.onFinancerChange);
  $scope.$watch("main.year", this.onYearChange);

  this.getFinancers(Financers);
}

exports.MainCtrl = Class(MainCtrl)
.method("getFinancers", function(Financers) {
  var self = this;

  Financers.getAll().then(function(financers) {
    if (financers.length) {
      self.$scope.$apply(function() {
        self.financers = financers;
        self.selected = financers[0];
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
