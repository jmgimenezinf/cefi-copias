"use strict";

module.exports = function(sequelize, DataTypes) {
  var Autor = sequelize.define("Autor", {
    idAutor:{ type:DataTypes.INTEGER,
      field:'idAutor',
    autoIncrement: true,
    primaryKey: true
  },
    autor: {type:DataTypes.STRING,
      field:'autor'}
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
    ,
  timestamps: false,  
  freezeTableName: true // Model tableName will be the same as the model name
  });

  return Autor;
};

