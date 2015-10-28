'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.borrowers = function(sequelize, DataTypes) {
  return sequelize.define('borrowers', {
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
    },*/
    name: {
      type: DataTypes.STRING,
      get: function() {
        return this.getDataValue("name");
      },
      set: function(val) {
        this.setDataValue("name", val);
      }
    },
    contact: {
      type: DataTypes.STRING,
      get: function() {
        return this.getDataValue("contact");
      },
      set: function(val) {
        this.setDataValue("contact", val);
      }
    },
    address: {
      type: DataTypes.STRING,
      get: function() {
        return this.getDataValue("address");
      },
      set: function(val) {
        this.setDataValue("address", val);
      }
    },
    picture: {
      type: DataTypes.STRING,
      get: function() {
        return this.getDataValue("picture");
      },
      set: function(val) {
        this.setDataValue("picture", val);
      }
    },
    comaker: {
      type: DataTypes.STRING,
      get: function() {
        return this.getDataValue("comaker");
      },
      set: function(val) {
        this.setDataValue("comaker", val);
      }
    },
    note: {
      type: DataTypes.TEXT,
      get: function() {
        return this.getDataValue("note");
      },
      set: function(val) {
        this.setDataValue("note", val);
      }
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
  })
}
