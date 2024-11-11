const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.json({
    name: "rishabh",
  });
});

app.post("/", function (req, res) {
  res.send("<h1>Hello From Post Endpoint</h1>");
});

app.listen(3000);
