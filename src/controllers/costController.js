const Cost = require("../models/cost");

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

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

    newCost.id = generateId();

    await newCost.save();
    res.status(201).json({ id: newCost.id, requestData: req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
