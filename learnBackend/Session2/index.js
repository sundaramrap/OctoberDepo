const express = require("express");
const appe = express();
const curreniesIndex = require("./currencies.json");
const PORT = 8087;

appe.get("/", (req, res) => {
  res.send("<h1>Currency DataBase</h1>");
});

appe.get("/currencies", (req, res) => {
  res.json(curreniesIndex);
});

appe.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
