const express = require("express");
const app = express();

app.use("/questions/", require("./routes/questionsRoute"));

app.listen(8000, function() {
  console.log("express server is running on port 8000");
})