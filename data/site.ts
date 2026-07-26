export const projects = [
  {
    slug: "finance-dashboard",
    title: "Personal Finance Dashboard",
    tag: "FinTech + AI + Full Stack",
    year: "2026",
    summary:
      "A full-stack personal finance application that helps users track spending, organize transactions, and understand their financial habits through clear dashboards, analytics, and OpenAI-powered insights.",
    problem:
      "Personal spending data is often scattered across accounts and difficult to interpret, making it harder for users to understand where their money goes and make informed financial decisions.",
    solution:
      "A centralized dashboard that organizes transactions, groups expenses by category, tracks spending trends, and uses the OpenAI API to turn raw transaction data into plain-language financial insights alongside readable visualizations.",
    stack: ["React", "Express", "Node.js", "OpenAI API", "JSON"],
    githubUrl: "https://github.com/Yosef-dev116/personal-finance-dashboard",
    liveUrl: "https://personal-finance-dashboard-eosin-alpha.vercel.app",
    image: "/project-finance.jpg",
    accent: "from-violet-500/30 to-cyan-400/10",
  },

  {
    slug: "energy-dashboard",
    title: "Real-Time Energy Dashboard",
    tag: "Data Visualization + Backend Systems",
    year: "2026",
    summary:
      "A real-time monitoring platform that collects, processes, and visualizes energy consumption data through interactive dashboards and live analytics.",
    problem:
      "Energy usage data is generated continuously and can be difficult to monitor, analyze, and interpret in real time without a centralized system.",
    solution:
      "Developed a responsive dashboard that processes incoming data, displays live metrics, visualizes historical trends, and helps users identify unusual energy consumption patterns through interactive charts.",
    stack: ["React", "Python", "FastAPI", "Recharts"],
    githubUrl: "https://github.com/Yosef-dev116/Real-Time-Energy-Dashboard",
    liveUrl: "https://frontend-ten-chi-38.vercel.app",
    backendUrl: "https://energy-dashboard-backend-dc3t.onrender.com",
    image: "/project-energy.jpg",
    accent: "from-emerald-500/25 to-blue-500/10",
  },

  {
    slug: "fastapi-docs-rag",
    title: "FastAPI Docs Q&A — Hybrid RAG",
    tag: "AI + Retrieval-Augmented Generation",
    year: "2026",
    summary:
      "A retrieval-augmented question-answering system over FastAPI's own documentation, combining dense and keyword search with an independent fact-check on every cited claim. Scored on a hand-written 18-question eval: 100% correctness, 86% citation faithfulness, 100% citation accuracy, and 100% correct refusal on out-of-corpus questions.",
    problem:
      "Technical documentation mixes exact terms (function names, error codes, config keys) with conceptual explanations, so semantic search alone misses literal matches and keyword search alone misses paraphrased questions. On top of that, language models can cite a source that sounds relevant without it actually supporting the specific claim attached to it.",
    solution:
      "Combines dense embedding search (OpenAI embeddings + ChromaDB) with sparse BM25 keyword search, merged with Reciprocal Rank Fusion, so the system catches both literal terms and conceptual questions. Every generated answer cites its sources, and a second, independent LLM call checks each citation against the specific claim it's attached to before the answer is shown — with results measured against a real eval set rather than only spot-checked by hand.",
    stack: ["Python", "OpenAI API", "ChromaDB", "BM25", "Streamlit"],
    githubUrl: "https://github.com/Yosef-dev116/fastapi-docs-rag",
    liveUrl: "https://yosef-fastapi-docs-rag.streamlit.app",
    image: "/project-rag.jpg",
    accent: "from-amber-500/25 to-rose-500/10",
  },
];

export const skills = {
  Languages: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],

  Frontend: [
    "React",
    "Next.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Responsive Design",
  ],

  Backend: [
    "FastAPI",
    "REST APIs",
    "Object-Oriented Programming",
    "API Development",
    "Server-Side Development",
  ],

  "Computer Science": [
    "Data Structures",
    "Algorithms",
    "Programming Practices",
    "Computer Architecture",
    "Database Fundamentals",
  ],

  Tools: ["Git", "GitHub", "Cursor", "VS Code", "Debugging", "Testing"],

  "AI & Data": [
    "Machine Learning Fundamentals",
    "Prompt Engineering",
    "Data Analysis",
    "AI-Assisted Development",
  ],

  Mathematics: [
    "Linear Algebra",
    "Calculus",
    "Combinatorics",
    "Differential Equations",
  ],

  "Currently Learning": [
    "Machine Learning",
    "Database Systems",
    "Operating Systems",
    "Computer Networks",
    "Software Architecture",
  ],
};
