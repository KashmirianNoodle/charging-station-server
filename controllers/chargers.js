const { ChargingStation } = require("../models");

exports.createCharger = async (req, res) => {
  try {
    const charger = await ChargingStation.create({ ...req.body, UserId: req.userId });
    res.status(201).json(charger);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getChargers = async (req, res) => {
  const where = {};
  if (req.query.status) where.status = req.query.status;
  if (req.query.connector_type) where.connector_type = req.query.connector_type;
  if (req.query.minPower && req.query.maxPower) {
    where.power_output = {
      [require("sequelize").Op.between]: [parseInt(req.query.minPower), parseInt(req.query.maxPower)],
    };
  }

  const chargers = await ChargingStation.findAll({ where });
  res.json(chargers);
};

exports.updateCharger = async (req, res) => {
  try {
    const charger = await ChargingStation.findByPk(req.params.id);
    if (!charger || charger.UserId !== req.userId) return res.status(404).json({ error: "Not found" });

    await charger.update(req.body);
    res.json(charger);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCharger = async (req, res) => {
  const charger = await ChargingStation.findByPk(req.params.id);
  if (!charger || charger.UserId !== req.userId) return res.status(404).json({ error: "Not found" });

  await charger.destroy();
  res.json({ message: "Charger deleted" });
};
