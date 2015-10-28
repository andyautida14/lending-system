'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.accounts = function (sequelize, DataTypes) {
  var accounts = sequelize.define('accounts', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      get: function() {
        return this.getDataValue("id");
      }
    },
    username: {
      type: DataTypes.STRING,
      get: function() {
        return this.getDataValue("username");
      },
      set: function(val) {
        this.setDataValue("username", val);
      }
    },
    salt: {
      type: DataTypes.STRING,
      get: function() {
        return this.getDataValue("salt");
      },
      set: function(val) {
        this.setDataValue("salt", val);
      }
    },
    password: {
      type: DataTypes.STRING,
      get: function() {
        return this.getDataValue("password");
      },
      set: function(val) {
        this.setDataValue("password", val);
      }
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });

  return accounts;
}
