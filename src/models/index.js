
"use strict";
require('dotenv').config();
const POSTGRES_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;
const { Sequelize, DataTypes } = require("sequelize");
const Food = require("./food");

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

let sequelize = new Sequelize(POSTGRES_URL, sequelizeOptions);
module.exports = {
    db: sequelize,
    Food: Food(sequelize, DataTypes),

};