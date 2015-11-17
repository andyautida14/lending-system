'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Class = require('../constituent.min.js').Class;
var setup = require('../lib/setup-menu.js').setup;

exports.Menu = Class(function($rootScope) {
  this.$rootScope = $rootScope;
})
.method("setup", function() {
  var that = this;
  setup({
  	logout: that.onLogout.bind(that),
  	exit: that.onExit.bind(that),
  	search: that.onSearch.bind(that),
  	create: that.onCreate.bind(that),
  	creator: that.onCreator.bind(that)
  });
})
.method("onLogout", function() {
  console.log("onLogout", this.$rootScope);
})
.method("onExit", function() {
  console.log("onExit", this.$rootScope);
})
.method("onSearch", function() {
  console.log("onSearch", this.$rootScope);
})
.method("onCreate", function() {
  console.log("onCreate", this.$rootScope);
})
.method("onCreator", function() {
  console.log("onCreator", this.$rootScope);
})
