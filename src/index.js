require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("I'm very Happy");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

