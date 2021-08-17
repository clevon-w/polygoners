//i think here using react
exports.questionsController = (req, res) => {
  res.json({
    questionsJson: [
      {
        question: "this is the first cca question",
        type: "cca",
        id: 0
      },
      {
        question: "this is the first exp question",
        type: "exp",
        id: 1
      },
      {
        question: "this is the first health question",
        type: "health",
        id: 2
      },
    ]
  })
}