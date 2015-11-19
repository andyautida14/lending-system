'use strict';

var renderer = './renderer/';
var config = require(renderer + 'db-config.json');
var db = require(renderer + 'lib/database.js').connect(config);
var angular = require("angular");

angular.module('app.db', [])
.value("Database", db.database)
.value("_accounts", db.models.accounts)
.value("_borrowers", db.models.borrowers)
.value("_dues", db.models.dues)
.value("_financers", db.models.financers)
.value("_interests", db.models.interests)
.value("_payments", db.models.payments)
.service("Accounts", require(renderer + 'svc/db.accounts.js').Accounts)
.service("Borrowers", require(renderer + 'svc/db.borrowers.js').Borrowers)
.service("Dues", require(renderer + 'svc/db.dues.js').Dues)
.service("Financers", require(renderer + 'svc/db.financers.js').Financers)
.service("Interests", require(renderer + 'svc/db.interests.js').Interests)
.service("payments", require(renderer + 'svc/db.payments.js').Payments);
