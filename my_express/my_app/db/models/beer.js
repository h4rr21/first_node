'use strict';
module.exports = (sequelize, DataTypes) => {
  var Beer = sequelize.define('Beer', {
    name: DataTypes.STRING,
    alcohol: DataTypes.FLOAT,
    type: DataTypes.INTEGER,
    brand: DataTypes.INTEGER,
    description: DataTypes.STRING,
    volume: DataTypes.FLOAT,
    price: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Beer;
};