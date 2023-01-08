// here using express
const express = require("express");
router = express.Router();
questionsRoute = require("../controllers/questionsController");

router.get("/", questionsRoute.allQuestions);
router.post("/submitQuestions", questionsRoute.submitQuestions);

module.exports = router;
