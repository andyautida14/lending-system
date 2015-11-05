'use strict';

var _main = require('./renderer/ctrl/main.js');
var _setup = require('./renderer/lib/setup-menu.js');
var MainCtrl = _main.MainCtrl;
var setup = _setup.setup;

angular.module("app", [
	"ui.bootstrap",
	"angularMoment",
	"app.db"
])
.controller("main", MainCtrl);

// dummy
setup({
	logout: function () { console.log("logout"); },
	exit: function () { console.log("exit"); },
	search: function () { console.log("search"); },
	create: function () { console.log("create"); },
	creator: function () { console.log("creator"); }
});
