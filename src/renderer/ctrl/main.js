'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function MainCtrl ($scope, Database) {
  Database.sync({logging: console.log});
};

exports.MainCtrl = MainCtrl;
