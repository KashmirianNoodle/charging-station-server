const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const ChargingStation = sequelize.define("ChargingStation", {
    name: { type: DataTypes.STRING, allowNull: false },
    location_lat: { type: DataTypes.FLOAT, allowNull: false },
    location_lng: { type: DataTypes.FLOAT, allowNull: false },
    status: { type: DataTypes.ENUM("active", "inactive"), defaultValue: "active" },
    power_output: { type: DataTypes.INTEGER, allowNull: false },
    connector_type: { type: DataTypes.STRING, allowNull: false },
  });

  return ChargingStation;
};
