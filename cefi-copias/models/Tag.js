"use strict";

module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define("Tag", {
    idTags:{ type:DataTypes.INTEGER,
      field:'idTags',
    autoIncrement: true,
    primaryKey: true
  },
    etiqueta: {type:DataTypes.STRING,
      field:'etiqueta'}
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
    ,
  timestamps: false,  
  freezeTableName: true // Model tableName will be the same as the model name
  });

  return Tag;
};

