'use strict';

var MainCtrl = require('./renderer/ctrl/main.js').MainCtrl;
var Menu = require('./renderer/svc/menu.js').Menu;

angular.module("app", [
	"ui.bootstrap",
	"angularMoment",
	"app.db"
])
.controller("main", MainCtrl)
.service("Menu", Menu);
