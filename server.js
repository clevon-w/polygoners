const express = require("express");
const app = express();

app.use("/questions/", require("./routes/questionsRoute"));

app.listen(5000, function() {
  console.log("express server is running on port 5000");
})