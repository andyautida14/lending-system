'use strict';

var _main = require('./renderer/ctrl/main.js');
var MainCtrl = _main.MainCtrl;

angular.module("app", [
	"ui.bootstrap",
	"angularMoment",
	"app.db"
])
.controller("main", MainCtrl);
