'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.payments = function(sequelize, DataTypes) {
  return sequelize.define('payments', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      get: function() {
        return this.getDataValue("id");
      }
    },/*
    due_id: {
      type: DataTypes.BIGINT,
      get: function() {
        return this.getDataValue("due_id");
      },
      set: function(val) {
        this.setDataValue("due_id", val);
      }
    },
    interest_id: {
      type: DataTypes.BIGINT,
      get: function() {
        return this.getDataValue("interest_id");
      },
      set: function(val) {
        this.setDataValue("interest_id", val);
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
    full_payment: {
      type: DataTypes.BOOLEAN,
      get: function() {
        return this.getDataValue("full_payment");
      },
      set: function(val) {
        this.setDataValue("full_payment", val);
      }
    },
    date_paid: {
      type: DataTypes.DATE,
      get: function() {
        return this.getDataValue("date_paid");
      },
      set: function(val) {
        this.setDataValue("date_paid", val);
      }
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
  })
}
