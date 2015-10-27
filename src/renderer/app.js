'use strict';

var _main = require('./renderer/main-ctrl.js');
var MainCtrl = _main.MainCtrl;

angular.module("app", [
	"ui.bootstrap",
	"angularMoment"
])
.controller("main", MainCtrl);
