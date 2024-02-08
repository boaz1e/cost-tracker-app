const mongoose = require("mongoose");

const costSchema = new mongoose.Schema({
  user_id: { type: Number, required: true },
  year: { type: Number, required: true },
  month: { type: Number, required: true },
  day: { type: Number, required: true },
  description: { type: String, required: true },
  category: {
    type: String,
    enum: [
      "food",
      "health",
      "housing",
      "sport",
      "education",
      "transportation",
      "other",
    ],
    required: true,
  },
  sum: { type: Number, required: true },
});

module.exports = mongoose.model("Cost", costSchema);
