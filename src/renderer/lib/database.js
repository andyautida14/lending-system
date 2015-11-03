'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.connect = function(config) {
  var Sequelize = require('sequelize');

  var sequelize = new Sequelize(config.database, config.username, config.password, {
  	dialect: "mariadb",
  	host: config.host,
  	port: config.password
  });

  var models = {
    accounts: require('../models/accounts.js').accounts(sequelize, Sequelize),
    borrowers: require('../models/borrowers.js').borrowers(sequelize, Sequelize),
    dues: require('../models/dues.js').dues(sequelize, Sequelize),
    financers: require('../models/financers.js').financers(sequelize, Sequelize),
    interests: require('../models/interests.js').interests(sequelize, Sequelize),
    payments: require('../models/payments.js').payments(sequelize, Sequelize)
  };

  models.dues.belongsTo(models.borrowers);
  models.dues.belongsTo(models.financers);
  models.dues.hasMany(models.interests, {as: 'interests'});
  models.dues.hasMany(models.payments, {as: 'payments'});

  models.financers.hasMany(models.dues, {as: 'dues'});

  models.interests.belongsTo(models.dues); 
  models.interests.hasOne(models.payments);

  models.payments.belongsTo(models.dues);
  models.payments.belongsTo(models.interests);

  return {
    database: sequelize,
    models: models
  }
}
