const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory:';
const ClothingSchema = require('./clothes.js'); 
// const Foods = require('./food.js');
// const Collection = require('./collection.js');


const sequelize = new Sequelize(DATABASE_URL);

const Clothing = ClothingSchema(sequelize, DataTypes);
// const Pet = PetSchema(sequelize, DataTypes);

// Person.hasMany(Pet, {foreignKey: 'personId', sourceKey: 'id' });
// Pet.belongsTo(Person, {foreignKey: 'personId', targetKey: 'id'});


module.exports = {
  Clothing,
//   Pet,
  sequelize,
//   Collection,
};