const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Activity", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    season: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: {
          args: 1,
          msg: "The difficulty must be at least 1.",
        },
        max: {
          args: 5,
          msg: "The difficulty cannot be greater than 5.",
        },

        isNumeric: {
          args: true,
          msg: "The difficulty must be a number",
        },
        isInt: {
          args: true,
          msg: "The difficulty must be a integer number",
        },
      },
    },
    duration: {
      type: DataTypes.INTEGER,
      isInt: true,
      isNumeric: true,
    },
  });
};
