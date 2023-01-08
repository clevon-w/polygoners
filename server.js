const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

app.use("/questions/", require("./routes/questionsRoute"));

app.listen(8000, function () {
  console.log("express server is running on port 8000");
});
