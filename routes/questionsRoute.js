// here using express
const express = require("express");
router = express.Router();
questionsRoute = require("../controllers/questionsController");

router.get("/", questionsRoute.questionsController);

module.exports = router;