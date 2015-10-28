'use strict';

var _main = require('./renderer/main-ctrl.js');
var MainCtrl = _main.MainCtrl;

var _models = require('./renderer/models.js');
console.log(_models);

angular.module("app", [
	"ui.bootstrap",
	"angularMoment"
])
.controller("main", MainCtrl);
