const Cost = require("../models/cost");

exports.addCost = async (req, res) => {
  try {
    const { user_id, year, month, day, description, category, sum } = req.body;
    const newCost = new Cost({
      user_id,
      year,
      month,
      day,
      description,
      category,
      sum,
    });
    await newCost.save();
    res.status(201).json(newCost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
