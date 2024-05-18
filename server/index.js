const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("server (test deploy) is running")
})

app.listen(5000, console.log("server (test deploy) has started"))