'use strict';

var MainCtrl = require('./renderer/ctrl/main.js').MainCtrl;
var Menu = require('./renderer/svc/menu.js').Menu;
var angular = require("angular");

angular.module("app", [
	require("angular-ui-bootstrap"),
	require("angular-moment"),
	"app.db"
])
.controller("main", MainCtrl)
.service("Menu", Menu);
