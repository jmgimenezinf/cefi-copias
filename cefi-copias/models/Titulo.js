"use strict";

module.exports = function(sequelize, DataTypes) {
  var Titulo = sequelize.define("Titulo", {
    idTags:{ type:DataTypes.INTEGER,
      field:'idTitulo',
    autoIncrement: true,
    primaryKey: true
  },
    titulo: {type:DataTypes.STRING,
      field:'titulo'}
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
    ,
  timestamps: false,  
  freezeTableName: true // Model tableName will be the same as the model name
  });

  return Titulo;
};

