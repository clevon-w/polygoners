//i think here using react
exports.questionsController = (req, res) => {
  res.json({
    questionsJson: [
      //CCA Questions
      {
        question: "I plan to join as many CCAs as I can to make my portfolio more impressive.",
        type: "cca",
        id: 00
      },
      {
        question: "I want to be/already am in an EXCO position in my CCA.",
        type: "cca",
        id: 01
      },
      {
        question: "I want to be good enough in my CCA to be chosen to be part of the Varsity Team/EXCO.",
        type: "cca",
        id: 02
      },
      {
        question: "My CCA(s) require a large amount of committment.",
        type: "cca",
        id: 03
      },
      {
        question: "I think of my CCA as the best way to develop myself in university.",
        type: "cca",
        id: 04
      },
      {
        question: "I am very committed and actively take part in CCA activities.",
        type: "cca",
        id: 05
      },
      {
        question: "If I do not make it to the Varsity team/EXCO, I would rather not do the sport/activity at all.",
        type: "cca",
        id: 06
      },
      {
        question: "If I am not in any CCA, I will not find my university life fulfilling.",
        type: "cca",
        id: 07
      },
      {
        question: "I am prepared to give up on my academic studies to pursue greatness in my CCA.",
        type: "cca",
        id: 08
      },
      {
        question: "I find the skills and achievements attained from my CCA experiences more useful than my university degree and internship experiences.",
        type: "cca",
        id: 09
      },
      //Exp Qns
      {
        question: "I am constantly seeking internship opportunities to beef up my portfolio.",
        type: "exp",
        id: 10
      },
      {
        question: "I actively participate in competitions to test my expertise in my area of study.",
        type: "exp",
        id: 11
      },
      {
        question: "I would want to become a Teaching Assistant to improve my knowledge of my field of study.",
        type: "exp",
        id: 12
      },
      {
        question: "I wish to take part in overseas exchange programmes/NOC.",
        type: "exp",
        id: 13
      },
      {
        question: "I believe that gaining working experience is the most important part of education and development.",
        type: "exp",
        id: 14
      },
      {
        question: "If given a chance, I would want to take a Gap Year to gain working experience in my field of study",
        type: "exp",
        id: 15
      },
      {
        question: "I would halt my studies in exchange for valuable working opportunities.",
        type: "exp",
        id: 16
      },
      {
        question: "I believe that the knowledge attained from studying for a degree alone is definitely insufficient to contribute to my future company.",
        type: "exp",
        id: 17
      },
      {
        question: "I place more importance in attaining/gaining work experience than achieving academic success.",
        type: "exp",
        id: 18
      },
      {
        question: "I actively take part in external projects to increase my level of expertise and gain application experience in my area of study.",
        type: "exp",
        id: 19
      },
      //Health Qns
      {
        question: "this is the first health question",
        type: "health",
        id: 2
      },
    ]
  })
}