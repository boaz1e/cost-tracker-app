const Cost = require("../models/cost");

const formatReport = (report) => {
  const formattedReport = {
    food: [],
    health: [],
    housing: [],
    sport: [],
    education: [],
    transportation: [],
    other: [],
  };

  report.forEach((item) => {
    const category = item.category;
    formattedReport[category].push({
      day: item.day,
      description: item.description,
      sum: item.sum,
    });
  });

  return formattedReport;
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
