"use strict";
require('dotenv').config();
const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;
const { Sequelize, DataTypes } = require("sequelize");
const foodModel = require("./food");
const ingredientsModel = require("./Ingredients");
const Collection = require('./collection-class')



let sequelizeOptions =
    process.env.NODE_ENV === "production"
        ? {
            dialect: 'postgres',
            protocol: 'postgres',
            dialectOptions: {
                ssl: { require: true, rejectUnauthorized: false },
                native: true
            }
        } : {};
let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

const foodTable = foodModel(sequelize, DataTypes);
const ingredientsTable = ingredientsModel(sequelize, DataTypes);

const foodCollection = new Collection(foodTable);
const ingredientsCollection = new Collection(ingredientsTable);

foodTable.hasMany(ingredientsTable, {
    foreignKey: "foodId",
    sourceKey: "id"
});

ingredientsTable.belongsTo(foodTable, {
    foreignKey: "foodId",
    targetKey: "id",
});



module.exports = {
    db: sequelize,
    foodTable: foodCollection,
    ingredientsTable: ingredientsCollection,
};