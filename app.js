// DEPENDENCIES //
const express = require("express");

// CONFIGURATION //
const app = express();
const morgan = require("morgan");

// MIDDLEWARE //
app.use(express.json());

// ROUTES //
app.get("/", (req, res) => {
  res.send(`welcome to the budget app`);
});
app.use(morgan());

app.get("*", (req, res) => {
  res.status(404).send("page not found");
});

// EXPORT //
module.exports = app;
