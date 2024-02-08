const express = require("express");
const router = express.Router();
const costController = require("../controllers/costController");

router.post("/addcost", costController.addCost);

module.exports = router;
