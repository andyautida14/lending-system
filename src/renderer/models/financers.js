'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.financers = function(sequelize, DataTypes) {
  return sequelize.define('financers', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      get: function() {
        return this.getDataValue("id");
      }
    },
    name: {
      type: DataTypes.STRING,
      get: function() {
        return this.getDataValue("name");
      },
      set: function(val) {
        this.setDataValue("name", val);
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
    freezeTableName: true
  })
}
