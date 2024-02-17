const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(require("../routes/costRoutes"));
app.use(require("../routes/reportRoutes"));
app.use(require("../routes/aboutRoutes"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

module.exports = app;
