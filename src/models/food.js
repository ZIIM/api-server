'use strict';

// using demo code to sequelize to model out data, the string is the table name
const Food = (sequelize, DataTypes) => sequelize.define('Food', {
  name: DataTypes.STRING,
  type: DataTypes.STRING,
  ANumber: DataTypes.INTEGER,
  BNumber: DataTypes.INTEGER,
});

module.exports = Food;