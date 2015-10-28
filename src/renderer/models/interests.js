'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.interests = function(sequelize, DataTypes) {
  return sequelize.define('interests', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      get: function() {
        return this.getDataValue("id");
      }
    },/*
    payment_id: {
      type: DataTypes.BIGINT,
      get: function() {
        return this.getDataValue("payment_id");
      },
      set: function(val) {
        this.setDataValue("payment_id", val);
      }
    },*/
    amount: {
      type: DataTypes.BIGINT,
      get: function() {
        return this.getDataValue("amount");
      },
      set: function(val) {
        this.setDataValue("amount", val);
      }
    },
    for_date: {
      type: DataTypes.DATE,
      get: function() {
        return this.getDataValue("for_date");
      },
      set: function(val) {
        this.setDataValue("for_date", val);
      }
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
  })
}
