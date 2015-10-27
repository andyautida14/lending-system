'use strict';

var MainCtrl = require('./main-ctrl').MainCtrl;

angular.module("app", [
	"ui.bootstrap",
	"angularMoment"
])
.controller("main", MainCtrl);
