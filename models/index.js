const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false,
});

const User = require("./User")(sequelize);
const ChargingStation = require("./ChargingStation")(sequelize);

User.hasMany(ChargingStation);
ChargingStation.belongsTo(User);

module.exports = { sequelize, User, ChargingStation };
