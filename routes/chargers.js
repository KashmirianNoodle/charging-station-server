const express = require("express");
const router = express.Router();
const chargersCtrl = require("../controllers/chargers");

router.post("/", chargersCtrl.createCharger);
router.get("/", chargersCtrl.getChargers);
router.put("/:id", chargersCtrl.updateCharger);
router.delete("/:id", chargersCtrl.deleteCharger);

module.exports = router;
