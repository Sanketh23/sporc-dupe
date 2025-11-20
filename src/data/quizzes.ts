// src/data/quizzes.ts

export type Category =
  | "mvps"
  | "allstars"
  | "teams"
  | "drafts"
  | "leaders"
  | "history";

export interface Quiz {
  id: string;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  tags: string[];
  category: Category;
  questions: Question[];
}

export interface Question {
  id: string;
  type: "name-list" | "multiple-choice";
  prompt: string;
  answers?: string[];
  choices?: string[];
  correctAnswer?: string;
}

export const quizzes: Quiz[] = [
  // -----------------------------------------
  // 1 — MVPs 2010–2019
  // -----------------------------------------
  {
    id: "nba-mvp-2010s",
    title: "NBA MVPs of the 2010s",
    description: "Can you name every NBA MVP from 2010–2019?",
    difficulty: "medium",
    tags: ["MVPs", "2010s", "Awards"],
    category: "mvps",
    questions: [
      {
        id: "q1",
        type: "name-list",
        prompt: "Type all the MVPs from 2010–2019.",
        answers: [
          "lebron james",
          "derrick rose",
          "kevin durant",
          "stephen curry",
          "russell westbrook",
          "james harden",
          "giannis antetokounmpo"
        ]
      }
    ]
  },

  // -----------------------------------------
  // 2 — All NBA MVPs ever
  // -----------------------------------------
  {
    id: "all-mvps",
    title: "All NBA MVPs Ever",
    description: "Name every MVP winner in NBA history.",
    difficulty: "hard",
    tags: ["MVPs", "History"],
    category: "mvps",
    questions: [
      {
        id: "q1",
        type: "name-list",
        prompt: "Type every NBA MVP winner from 1956 to today.",
        answers: [
          // 1950s
          "bob pettit",
          "bill russell",
          // 1960s
          "wilt chamberlain",
          "oscar robertson",
          "wes unseld",
          "willis reed",
          // 1970s
          "kareem abdul-jabbar",
          "dave cowens",
          "bill walton",
          "moses malone",
          // 1980s
          "julius erving",
          "larry bird",
          "magic johnson",
          // 1990s
          "charles barkley",
          "hakeem olajuwon",
          "karl malone",
          "michael jordan",
          // 2000s
          "allen iverson",
          "tim duncan",
          "kevin garnett",
          "steve nash",
          "dirk nowitzki",
          "kobe bryant",
          "lebron james",
          // 2010s+
          "derrick rose",
          "kevin durant",
          "stephen curry",
          "russell westbrook",
          "james harden",
          "giannis antetokounmpo",
          "nikola jokic",
          "joel embiid"
        ]
      }
    ]
  },

  // -----------------------------------------
  // 3 — 2020 All-Stars
  // -----------------------------------------
  {
    id: "2020-allstars",
    title: "2020 NBA All-Stars",
    description: "Name every All-Star from the 2020 season.",
    difficulty: "easy",
    tags: ["All-Stars", "2020s"],
    category: "allstars",
    questions: [
      {
        id: "q1",
        type: "name-list",
        prompt: "Type all players selected to the 2020 NBA All-Star Game.",
        answers: [
          "lebron james",
          "anthony davis",
          "kawhi leonard",
          "james harden",
          "luka doncic",
          "damian lillard",
          "chris paul",
          "nikola jokic",
          "rudy gobert",
          "russell westbrook",
          "domantas sabonis",
          "ben simmons",
          "kemba walker",
          "jayson tatum",
          "pascal siakam",
          "jimmy butler",
          "joel embiid",
          "kyle lowry",
          "bam adebayo",
          "kris middleton",
          "trae young",
          "brandon ingram",
          "devin booker"
        ]
      }
    ]
  },

  // -----------------------------------------
  // 4 — 2010 Lakers Roster
  // -----------------------------------------
  {
    id: "lakers-roster-2010",
    title: "2010 Lakers Roster",
    description: "Name every player on the 2010 championship Lakers.",
    difficulty: "medium",
    tags: ["Teams", "Lakers", "2010"],
    category: "teams",
    questions: [
      {
        id: "q1",
        type: "name-list",
        prompt: "Type every player on the 2010 Los Angeles Lakers roster.",
        answers: [
          "kobe bryant",
          "pau gasol",
          "lamar odom",
          "andrew bynum",
          "ron artest",
          "dereck fisher",
          "shannon brown",
          "jordan farmar",
          "sasha vujacic",
          "luke walton",
          "adam morrison",
          "dj mbenga",
          "josh powell"
        ]
      }
    ]
  },

  // -----------------------------------------
  // 5 — 2003 Draft Class
  // -----------------------------------------
  {
    id: "draft-2003",
    title: "2003 Draft Class",
    description: "Name the top lottery picks from the 2003 NBA Draft.",
    difficulty: "medium",
    tags: ["Draft", "2003"],
    category: "drafts",
    questions: [
      {
        id: "q1",
        type: "name-list",
        prompt: "Type all lottery players (top 13 picks) from the 2003 NBA Draft.",
        answers: [
          "lebron james",
          "darko milicic",
          "carmelo anthony",
          "chris bosh",
          "dwyane wade",
          "chris kaman",
          "kirk hinrich",
          "tj ford",
          "michael sweetney",
          "jarvis hayes",
          "mickael pietrus",
          "nick collison",
          "marcus banks"
        ]
      }
    ]
  },

  // -----------------------------------------
  // 6 — Career Scoring Leaders
  // -----------------------------------------
  {
    id: "career-scoring-leaders",
    title: "Career Scoring Leaders",
    description: "Top 20 career scoring leaders all-time.",
    difficulty: "hard",
    tags: ["Records", "Leaders"],
    category: "leaders",
    questions: [
      {
        id: "q1",
        type: "name-list",
        prompt: "Type the top 20 NBA all-time scoring leaders.",
        answers: [
          "lebron james",
          "kareem abdul-jabbar",
          "karl malone",
          "kobe bryant",
          "michael jordan",
          "dirk nowitzki",
          "wilt chamberlain",
          "shaquille o'neal",
          "carmelo anthony",
          "moses malone",
          "elvin hayes",
          "hakeem olajuwon",
          "kevin durant",
          "oscar robertson",
          "dominique wilkins",
          "tim duncan",
          "paul pierce",
          "john havlicek",
          "kevin garnett",
          "vince carter"
        ]
      }
    ]
  }
];
