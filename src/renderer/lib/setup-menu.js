'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var remote = require("remote");
var Menu = remote.require("menu");
var MenuItem = remote.require("menu-item");

exports.setup = function(callbacks) {
  var template = [
    {
      label: "User",
      submenu: [
        {
          label: "Logout",
          click: callbacks.logout
        },
        {
          label: "Exit",
          click: callbacks.exit
        }
      ]
    },
    {
      label: "Borrower",
      submenu: [
        {
          label: "Search",
          click: callbacks.search
        }
      ]
    },
    {
      label: "Financer",
      submenu: [
        {
          label: "Create",
          click: callbacks.create
        }
      ]
    },
    {
      label: "About",
      submenu: [
        {
          label: "Creator",
          click: callbacks.creator
        }
      ]
    }
  ];

  var menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}
