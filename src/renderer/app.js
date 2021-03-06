'use strict';

var MainCtrl = require('./renderer/ctrl/main.js').MainCtrl;
var Menu = require('./renderer/svc/menu.js').Menu;
var ColumnDefs = require('./renderer/svc/column-defs.js').ColumnDefs;

angular.module("app", [
	require("angular-ui-bootstrap"),
	require("angular-moment"),
	"ui.grid",
	"ui.grid.pinning",
	"ui.grid.autoResize",
	"app.db",
	"test"
])
.controller("main", MainCtrl)
.service("Menu", Menu)
.service("ColumnDefs", ColumnDefs);
