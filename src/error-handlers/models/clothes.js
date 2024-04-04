'use strict';

// used from demo same as food
const Clothes = (sequelize, DataTypes) => sequelize.define('Clothes',{
  name: DataTypes.STRING,
  type: DataTypes.STRING,
  ANumber: DataTypes.INTEGER,
  BNumber: DataTypes.INTEGER,
});

module.exports = Clothes;