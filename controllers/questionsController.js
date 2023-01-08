exports.allQuestions = (req, res) => {
  res.json({
    questionsJson: [
      //CCA Questions
      {
        question:
          "I plan to join as many CCAs as I can to make my portfolio more impressive.",
        type: "cca",
        id: "00",
      },
      {
        question: "I want to be/already am in an EXCO position in my CCA.",
        type: "cca",
        id: "01",
      },
      {
        question:
          "I want to be good enough in my CCA to be chosen to be part of the Varsity Team/EXCO.",
        type: "cca",
        id: "02",
      },
      {
        question: "My CCA(s) require a large amount of committment.",
        type: "cca",
        id: "03",
      },
      {
        question:
          "I think of my CCA as the best way to develop myself in university.",
        type: "cca",
        id: "04",
      },
      {
        question:
          "I am very committed and actively take part in CCA activities.",
        type: "cca",
        id: "05",
      },
      {
        question:
          "If I do not make it to the Varsity team/EXCO, I would rather not do the sport/activity at all.",
        type: "cca",
        id: "06",
      },
      {
        question:
          "If I am not in any CCA, I will not find my university life fulfilling.",
        type: "cca",
        id: "07",
      },
      {
        question:
          "I am prepared to give up on my academic studies to pursue greatness in my CCA.",
        type: "cca",
        id: "08",
      },
      {
        question:
          "I find the skills and achievements attained from my CCA experiences more useful than my university degree and internship experiences.",
        type: "cca",
        id: "09",
      },
      //Exp Qns
      {
        question:
          "I am constantly seeking internship opportunities to beef up my portfolio.",
        type: "exp",
        id: "10",
      },
      {
        question:
          "I actively participate in competitions to test my expertise in my area of study.",
        type: "exp",
        id: "11",
      },
      {
        question:
          "I would want to become a Teaching Assistant to improve my knowledge of my field of study.",
        type: "exp",
        id: "12",
      },
      {
        question: "I wish to take part in overseas exchange programmes/NOC.",
        type: "exp",
        id: "13",
      },
      {
        question:
          "I believe that gaining working experience is the most important part of education and development.",
        type: "exp",
        id: "14",
      },
      {
        question:
          "If given a chance, I would want to take a Gap Year to gain working experience in my field of study",
        type: "exp",
        id: "15",
      },
      {
        question:
          "I would halt my studies in exchange for valuable working opportunities.",
        type: "exp",
        id: "16",
      },
      {
        question:
          "I believe that the knowledge attained from studying for a degree alone is definitely insufficient to contribute to my future company.",
        type: "exp",
        id: "17",
      },
      {
        question:
          "I place more importance in attaining/gaining work experience than achieving academic success.",
        type: "exp",
        id: "18",
      },
      {
        question:
          "I actively take part in external projects to increase my level of expertise and gain application experience in my area of study.",
        type: "exp",
        id: "19",
      },
      //Health Qns
      {
        question: "I get 7-8 hours of sleep everyday.",
        type: "health",
        id: "20",
      },
      {
        question: "I cope with mental fatigue and stress very well.",
        type: "health",
        id: "21",
      },
      {
        question: "I follow my fitness program strictly.",
        type: "health",
        id: "22",
      },
      {
        question: "I am very conscientious of my diet.",
        type: "health",
        id: "23",
      },
      {
        question:
          "I spend a lot of time on self-care and ensuring my mental stability.",
        type: "health",
        id: "24",
      },
      {
        question:
          "To me, having a good work-life balance is of utmost importance.",
        type: "health",
        id: "25",
      },
      {
        question:
          "After a long social activity, I need to take time to recover and recharge my energy alone.",
        type: "health",
        id: "26",
      },
      {
        question:
          "I am rarely stressed or frustrated when things do not go my way.",
        type: "health",
        id: "27",
      },
      {
        question:
          "I dedicate a lot of time to my hobbies and interests to attempt to convert them into proficiencies.",
        type: "health",
        id: "28",
      },
      {
        question:
          "Even during busy periods, I will find ways to make time for my hobbies and interests.",
        type: "health",
        id: "29",
      },
      //RS Qns
      {
        question: "I open jio supper or attend open jios often.",
        type: "relationship",
        id: "30",
      },
      {
        question:
          "I enjoy meeting new people and take the initiative to make new friends.",
        type: "relationship",
        id: "31",
      },
      {
        question:
          "I believe that finding a romantic partner in university is essential.",
        type: "relationship",
        id: "32",
      },
      {
        question: "I actively set aside time to spend with my family.",
        type: "relationship",
        id: "33",
      },
      {
        question:
          "I catch up with my non-university friends on a regular basis.",
        type: "relationship",
        id: "34",
      },
      {
        question: "I enjoy attending drinking sessions or parties.",
        type: "relationship",
        id: "35",
      },
      {
        question:
          "I believe a fulfilling university life is largely dependent on the friends that you make and relationships that you forge.",
        type: "relationship",
        id: "36",
      },
      {
        question:
          "I regain energy from spending time with my friends and loved ones.",
        type: "relationship",
        id: "37",
      },
      {
        question:
          "I choose to stay on campus to make more friends, have fun and have a more fulfilling university life.",
        type: "relationship",
        id: "38",
      },
      {
        question:
          "I am willing to set aside my plans to sit down, listen and help my friends or family members with their problems.",
        type: "relationship",
        id: "39",
      },
      //Academic Qns
      {
        question: "I feel that my GPA significantly affects my future.",
        type: "academic",
        id: "40",
      },
      {
        question:
          "I believe a double major, minor or double degree will help me a lot of with job sourcing.",
        type: "academic",
        id: "41",
      },
      {
        question:
          "Rather than thinking of using up all my S/Us, I would rather devote time to every module and aim to pull up and stabilise my cap.",
        type: "academic",
        id: "42",
      },
      {
        question:
          "I make sure that I am managing my academic studies well before meeting my friends or picking up new activities.",
        type: "academic",
        id: "43",
      },
      {
        question:
          "If I feel that my style of studying isn't working, I will devise a new one.",
        type: "academic",
        id: "44",
      },
      {
        question:
          "I place a lot of pressure on myself to succeed academically.",
        type: "academic",
        id: "45",
      },
      {
        question: "I aim to perform above average for every module.",
        type: "academic",
        id: "46",
      },
      {
        question:
          " I follow my timetable very strictly to ensure that I have sufficient time to study.",
        type: "academic",
        id: "47",
      },
      {
        question:
          "I will never sacrifice the time I have allocated for studying to compensate for a lack of sleep. ",
        type: "academic",
        id: "48",
      },
      {
        question:
          "To me, studying is not an option, it is a neccessity for a better future.",
        type: "academic",
        id: "49",
      },
      //Hustle Qns
      {
        question:
          "I regularly work part time to earn additional income, or to cover for my own allowance.",
        type: "hustle",
        id: "50",
      },
      {
        question:
          "I try to earn as much money as I can, even when I am busy with my university studies.",
        type: "hustle",
        id: "51",
      },
      {
        question:
          "I actively come up with new project or business ideas to make good use of my time in university.",
        type: "hustle",
        id: "52",
      },
      {
        question:
          "I feel that the skillsets I learn from part-time jobs, even though unrelated to my degree, are extremely valuable to prepare me for the future.",
        type: "hustle",
        id: "53",
      },
      {
        question:
          "My current goal is to establish a self-sustaining business and achieve financial security at a young age.",
        type: "hustle",
        id: "54",
      },
      {
        question:
          "I am trying to turn my interests and skills into chargeable services for the public.",
        type: "hustle",
        id: "55",
      },
      {
        question:
          "I am currently involved in non-school related projects aimed to generate income and add value to society.",
        type: "hustle",
        id: "56",
      },
      {
        question: "I am currently doing investing with my excess savings.",
        type: "hustle",
        id: "57",
      },
      {
        question:
          "I actively seek to leverage on the skills of the people around me to create business projects that can potentially have good returns.",
        type: "hustle",
        id: "58",
      },
      {
        question:
          "I believe a side hustle is crucial to having a growth mindset.",
        type: "hustle",
        id: "59",
      },
    ],
  });
};

exports.submitQuestions = (req, res) => {
  console.log(req.body);
  let accumulatedRes = {
    cca: 0,
    exp: 0,
    relationship: 0,
    health: 0,
    academic: 0,
    hustle: 0,
  };

  Object.entries(req.body).forEach((entry) => {
    question = entry[0];
    value = entry[1];
    type = question.slice(0, -2);
    accumulatedRes[type]++;
  });

  console.log(accumulatedRes);
  res.status(200).json(accumulatedRes);
};
