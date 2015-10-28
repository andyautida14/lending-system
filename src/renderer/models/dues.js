'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.dues = function(sequelize, DataTypes) {
  return sequelize.define('dues', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      get: function() {
        return this.getDataValue("id");
      }
    },/*
    borrower_id: {
      type: DataTypes.BIGINT,
      get: function() {
        return this.getDataValue("borrower_id");
      },
      set: function(val) {
        this.setDataValue("borrower_id", val);
      }
    },
    financer_id: {
      type: DataTypes.BIGINT,
      get: function() {
        return this.getDataValue("financer_id");
      },
      set: function(val) {
        this.setDataValue("financer_id", val);
      }
    },*/
    principal: {
      type: DataTypes.BIGINT,
      get: function() {
        return this.getDataValue("principal");
      },
      set: function(val) {
        this.setDataValue("principal", val);
      }
    },
    current: {
      type: DataTypes.BIGINT,
      get: function() {
        return this.getDataValue("current");
      },
      set: function(val) {
        this.setDataValue("current", val);
      }
    },
    rate: {
      type: DataTypes.INTEGER,
      get: function() {
        return this.getDataValue("rate");
      },
      set: function(val) {
        this.setDataValue("rate", val);
      }
    },
    due_date: {
      type: DataTypes.BIGINT,
      get: function() {
        return this.getDataValue("due_date");
      },
      set: function(val) {
        this.setDataValue("due_date", val);
      }
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
  })
}
