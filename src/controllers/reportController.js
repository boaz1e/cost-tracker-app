const Cost = require("../models/cost");

const formatReport = (report) => {
  return report.map((item) => ({
    user_id: item.user_id,
    year: item.year,
    month: item.month,
    day: item.day,
    description: item.description,
    category: item.category,
    sum: item.sum,
  }));
};

exports.getReport = async (req, res) => {
  try {
    const { user_id, year, month } = req.query;
    const report = await Cost.find({ user_id, year, month }).lean();
    const formattedReport = formatReport(report);
    res.status(200).json(formattedReport);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
