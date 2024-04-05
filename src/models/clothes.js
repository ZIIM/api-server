'use strict';

// used from demo same as food
const Clothes = (sequelize, DataTypes) => sequelize.define('Clothes',{
  name: DataTypes.STRING,
  material: DataTypes.STRING,
  costProduction: DataTypes.INTEGER,
  costRetail: DataTypes.INTEGER,
});

module.exports = Clothes;