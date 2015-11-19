'use strict';

var MainCtrl = require('./renderer/ctrl/main.js').MainCtrl;
var Menu = require('./renderer/svc/menu.js').Menu;
var angular = require("angular");

angular.module("app", [
	require("angular-ui-bootstrap"),
	require("angular-moment"),
	"ui.grid",
	"app.db",
	"ui.grid.pinning"
])
.controller("main", MainCtrl)
.service("Menu", Menu);
