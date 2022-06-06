'use strict';

const Clothes = (sequelize, DataTypes) => {
  sequelize.define('Clothes', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
    },
  });
  return Clothes;
};
module.exports = Clothes;