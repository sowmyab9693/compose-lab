const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Deployed via CI/CD 🚀");
});

app.get("/health", (req, res) => {
  res.json({ status: "API is running" });
});

app.listen(3000, () => {
  console.log("Backend API running on port 3000");
});
