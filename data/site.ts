export const projects = [
  {
    slug: "gatherbite",
    title: "GatherBite",
    tag: "AI Agents + Verification + Full Stack",
    year: "2026",
    summary:
      "An AI agent that plans group food orders from live restaurant data, then checks dietary coverage, quantity, budget, and item validity before the user proceeds.",
    whyBuilt:
      "Group food orders look simple until dietary needs, budget, serving size, and live menu data collide. GatherBite separates planning from approval and uses deterministic checks as the final gate.",
    highlights: [
      "Separate planner and verifier agents",
      "Deterministic constraint checks",
      "Fail-closed handling for missing evidence",
      "Cart verification before and after execution",
    ],
    stack: ["Next.js", "TypeScript", "Vercel AI SDK", "Zod", "React"],
    githubUrl: "https://github.com/Yosef-dev116/gatherbite",
    image: null,
    visualSteps: ["Plan", "Verify", "Decide"],
  },

  {
    slug: "finance-dashboard",
    title: "Personal Finance Dashboard",
    tag: "FinTech + AI + Full Stack",
    year: "2026",
    summary:
      "A full-stack personal finance application that helps users track spending, organize transactions, and understand their financial habits through clear dashboards, analytics, and OpenAI-powered insights.",
    whyBuilt:
      "Personal spending data is often scattered across accounts, making it hard to see where money actually goes. This dashboard pulls transactions into one place, groups them by category, and uses the OpenAI API to turn the numbers into plain-language insights.",
    highlights: [
      "Express/Node.js API",
      "OpenAI-powered insights",
      "Transaction categorization",
      "React dashboard UI",
    ],
    stack: ["React", "Express", "Node.js", "OpenAI API", "JSON"],
    githubUrl: "https://github.com/Yosef-dev116/personal-finance-dashboard",
    liveUrl: "https://personal-finance-dashboard-eosin-alpha.vercel.app",
    liveNote: "Free-tier backend — may take up to a minute to wake up if idle.",
    image: "/project-finance.jpg",
  },

  {
    slug: "energy-dashboard",
    title: "Real-Time Energy Dashboard",
    tag: "Data Visualization + Backend Systems",
    year: "2026",
    summary:
      "A real-time monitoring platform that collects, processes, and visualizes energy consumption data through interactive dashboards and live analytics.",
    whyBuilt:
      "Energy usage data updates constantly, but it's hard to monitor or make sense of without a live view. This dashboard processes incoming readings in real time and visualizes consumption trends so unusual patterns are easy to spot.",
    highlights: [
      "FastAPI backend",
      "Real-time data pipeline",
      "Recharts visualizations",
      "Separate frontend/backend deploys",
    ],
    stack: ["React", "Python", "FastAPI", "Recharts"],
    githubUrl: "https://github.com/Yosef-dev116/Real-Time-Energy-Dashboard",
    liveUrl: "https://frontend-ten-chi-38.vercel.app",
    backendUrl: "https://energy-dashboard-backend-dc3t.onrender.com",
    liveNote: "Free-tier backend — may take up to a minute to wake up if idle.",
    image: "/project-energy.jpg",
  },

  {
    slug: "fastapi-docs-rag",
    title: "FastAPI Docs Q&A — Hybrid RAG",
    tag: "AI + Retrieval-Augmented Generation",
    year: "2026",
    summary:
      "A retrieval-augmented question-answering system over FastAPI's own documentation, combining dense and keyword search with an independent fact-check on every cited claim. Scored on a hand-written 18-question eval: 100% correctness, 86% citation faithfulness, 100% citation accuracy, and 100% correct refusal on out-of-corpus questions.",
    whyBuilt:
      "Technical docs mix exact terms with conceptual explanations, so search alone tends to miss one or the other. AI answers can also cite sources that don't really back up their claims. This system combines dense and keyword search with an independent fact-check on every citation, verified against a hand-written eval.",
    highlights: [
      "Hybrid dense + BM25 search",
      "Reciprocal Rank Fusion",
      "Citation fact-checking",
      "Evaluated on 18-question eval set",
      "Streamlit interface",
    ],
    stack: ["Python", "OpenAI API", "ChromaDB", "BM25", "Streamlit"],
    githubUrl: "https://github.com/Yosef-dev116/fastapi-docs-rag",
    liveUrl: "https://yosef-fastapi-docs-rag.streamlit.app",
    liveNote:
      'Free-tier app — may show a "waking up" screen for about a minute if idle.',
    image: "/project-rag.jpg",
  },

  {
    slug: "devproof",
    title: "DevProof",
    tag: "AI + Developer Tools + Full Stack",
    year: "2026",
    summary:
      "An evidence-based GitHub analysis platform that turns a developer's repo activity into an AI-generated engineering readiness report, plus a team/org mode for evaluating whole engineering teams.",
    whyBuilt:
      "GitHub profiles and resumes are easy to skim but hard to verify. DevProof pulls real evidence — commits, file structure, source code — and has an LLM score it against a fixed rubric instead of eyeballing it, for both individual repos and whole engineering teams.",
    highlights: [
      "GitHub OAuth sign-in",
      "LLM-graded reports on a fixed rubric",
      "Resume-vs-GitHub verification",
      "Org-wide contributor leaderboard",
      "FastAPI + Postgres backend",
    ],
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "React",
      "TypeScript",
      "OpenAI API",
    ],
    githubUrl: "https://github.com/Yosef-dev116/Devproof",
    liveUrl: "https://devproof-xi.vercel.app",
    liveNote:
      "Sign in with GitHub to try it — free-tier backend may take a minute to wake up if idle.",
    image: "/project-devproof.jpg",
  },

  {
    slug: "ultimate-tic-tac-toe",
    title: "Ultimate Tic-Tac-Toe — Daily Puzzle",
    tag: "Game + Algorithms + Front-End",
    year: "2026",
    summary:
      "A mobile-first Ultimate Tic-Tac-Toe game with a Wordle-style daily puzzle — one deterministic challenge a day, identical for every player, playable against a minimax AI opponent.",
    whyBuilt:
      "Wanted to combine a genuinely deeper strategy game with a Wordle-style shared daily format, and needed a real AI opponent rather than random moves — so I wrote a minimax engine with alpha-beta pruning and a deterministic, backend-free daily seed.",
    highlights: [
      "Minimax AI with alpha-beta pruning",
      "Deterministic daily puzzle (Wordle-style)",
      "Vitest suite covering engine, AI, and puzzle generator",
      "Shareable emoji result summary",
      "No backend — static Vite build",
    ],
    stack: ["React", "TypeScript", "Vite", "Vitest", "Motion"],
    githubUrl: "https://github.com/Yosef-dev116/ultimate-tic-tac-toe",
    liveUrl: "https://ultimate-tic-tac-toe-theta-five.vercel.app",
    image: "/project-tictactoe.jpg",
  },
];

export const skills = {
  Languages: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],

  Frameworks: ["React", "Next.js", "FastAPI"],

  Tools: ["Git", "GitHub", "Cursor", "VS Code", "Docker", "PostgreSQL"],

  Learning: ["Machine Learning", "Cloud Computing", "Linux", "System Design"],
};

export const achievements = [
  {
    title: "Rural Reach",
    issuer: "UPEI Animal Welfare Hackathon",
    year: "2026",
    category: "Innovation",
    description:
      "Co-developed a rural veterinary care co-op with a multidisciplinary team and won the Most Animal Welfare Impact award.",
    href: "/blog/rural-reach-animal-welfare-hackathon",
    linkLabel: "Read the story",
  },
  {
    title: "2nd Dan Black Belt",
    issuer: "World Taekwondo",
    year: "2020",
    category: "Martial Arts",
    description:
      "Years of training taught me discipline, consistency, and the importance of showing up every day, even when progress is slow.",
    href: "/certificates/world-taekwondo-2nd-dan.jpg",
    linkLabel: "View Certificate",
    openInNewTab: true,
  },
  {
    title: "Engineering Fair",
    issuer: "STEMpower",
    year: "2022",
    category: "Engineering",
    description:
      "Built and presented an engineering project while collaborating with other students and sharing ideas with other teams.",
    href: "/certificates/stempower-engineering-fair.jpg",
    linkLabel: "View Certificate",
    openInNewTab: true,
  },
];
