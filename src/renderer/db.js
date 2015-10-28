'use strict';

var config = require('./renderer/db-config.json');
var db = require('./renderer/lib/database.js').connect(config);

angular.module('app.db', [])
.value("Database", db.database)
.value("_accounts", db.models.accounts)
.value("_borrowers", db.models.borrowers)
.value("_dues", db.models.dues)
.value("_financers", db.models.financers)
.value("_interests", db.models.interests)
.value("_payments", db.models.payments);
