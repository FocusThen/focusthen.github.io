const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(process.env.PORT || 5000);
