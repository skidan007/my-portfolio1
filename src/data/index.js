import budgetflowLogo from "../assets/budgetflow-logo.png";
import fbciLogo from "../assets/fbci-logo.png";
import budgetMobile from "../assets/budgetflow-mobile.jpeg";
import hodLogo from "../assets/hod-cleaners.png";
import {
  LuCodeXml,
  LuSmartphone,
  LuTerminal,
  LuServer,
  LuDatabase,
  LuShieldCheck,
} from "react-icons/lu";

export const NAV_LINKS = [
  "About",
  "Services",
  "Stack",
  "Projects",
  "Journey",
  "Contact",
];

export const SERVICES = [
  {
    icon: LuCodeXml,
    title: "Frontend Development",
    desc: "Responsive interfaces and clear page layouts built for the web.",
    highlights: ["React", "JavaScript", "HTML", "CSS", "Responsive design"],
  },
  {
    icon: LuSmartphone,
    title: "Mobile Development",
    desc: "React Native, Expo, TypeScript and Expo Router for cross-platform mobile interfaces.",
  },
  {
    icon: LuTerminal,
    title: "Developer Tools",
    desc: "Git, GitHub, npm and debugging workflows for maintainable projects.",
  },
  {
    icon: LuServer,
    title: "Backend Development",
    desc: "Node.js, Express, REST APIs and PostgreSQL for server-side foundations.",
  },
  {
    icon: LuDatabase,
    title: "Database Technologies",
    desc: "PostgreSQL, SQL, schema design, constraints and indexes.",
  },
  {
    icon: LuShieldCheck,
    title: "Security & Data Access",
    desc: "Authentication concepts, authorization, input validation and row-level security.",
  },
];

export const STACK = {
  Frontend: [
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#FFFFFF" },
    { name: "Tailwind", color: "#38BDF8" },
    { name: "TypeScript", color: "#3178C6" },
  ],
  Backend: [
    { name: "Node.js", color: "#8CC84B" },
    { name: "Express", color: "#AAAAAA" },
    { name: "MongoDB", color: "#47A248" },
    { name: "PostgreSQL", color: "#336791" },
  ],
  Mobile: [
    { name: "React Native", color: "#61DAFB" },
    { name: "Flutter", color: "#54C5F8" },
  ],
  Tools: [
    { name: "Git", color: "#F05032" },
    { name: "Supabase", color: "#FFCA28" },
    { name: "Figma", color: "#F24E1E" },
    { name: "Docker", color: "#2496ED" },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: "BudgetFlow",
    desc: "Featured finance dashboard with transaction management, budget planning, financial summaries and data entry forms, built with responsive React components.",
    tags: ["React + Vite", "Tailwind CSS", "React Router", "Supabase Auth"],
    image: budgetflowLogo,
    imageAlt: "BudgetFlow logo",
    color: "#00C9C8",
    status: "Featured web application",
    liveDemo: "https://budgetflow-yzjx.vercel.app/",
    github: "https://github.com/skidan007/budgetflow",
  },


  {
    id: 2,
    title: "Verified Africa",
    desc: "African social and dating mobile app. Work includes mobile UI, reusable components, navigation, onboarding and profile interfaces, plus identity-verification flow design and a Supabase database foundation. Verification and authentication are not presented as completed features.",
    tags: ["React Native", "Expo", "TypeScript", "Expo Router", "Supabase"],
    image: null,
    color: "#00C9C8",
    status: "In development",
    previewLabel: "App screenshot not available",
  },
  {
    id: 3,
    title: "BudgetFlow Mobile App",
    desc: "A separate React Native and Expo implementation of BudgetFlow for mobile, with a dedicated sign-in interface. The web dashboard is presented separately above.",
    tags: ["React Native", "Expo", "Expo Router", "PostgreSQL", "TypeScript", "Supabase Auth"],
    image: budgetMobile,
    imageAlt: "BudgetFlow mobile sign-in screen",
    color: "#00C9C8",
    status: "Mobile implementation",
    liveDemo: null,
    github: "https://github.com/skidan007/budgetflow",
  },

  {
    id: 4,
    title: "HOD Cleaners",
    desc: "Laundry service application currently in development.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: hodLogo,
    imageAlt: "HOD Cleaners logo",
    color: "#7C3AED",
    status: "In development",
    liveDemo: "https://hod-lundary.vercel.app/",
    github: "https://github.com/skidan007/hod-lundary",
  },



  {
    id: 5,
    title: "Church Management System",
    desc: "Church management system concept in progress, focused on member records, event scheduling and announcements.",
    tags: ["Next.js", "Express", "MongoDB"],
    image: fbciLogo,
    imageAlt: "FBCI logo",
    color: "#1A6FD4",
    liveDemo: null,
    github: null,
    status: "In development",
  },

  {
    id: 6,
    title: "StockFlow",
    desc: "Inventory and bookkeeping application in development. Node.js, Express and PostgreSQL form the backend foundation; frontend capabilities are planned and not presented as complete.",
    tags: ["Node.js", "Express", "PostgreSQL", "REST API", "database schema", "SQL queries and validation"],
    image: null,
    color: "#D97706",
    status: "In development",
    previewLabel: "Prototype preview not available",
    liveDemo: null,
    github: "https://github.com/skidan007/StockFlow",
  },

  // {
  //   id: 6,
  //   title: "AI SaaS Dashboard",
  //   desc: "Analytics dashboard with AI-powered insights, real-time charts, and multi-tenant architecture.",
  //   tags: ["Next.js", "TypeScript", "Firebase"],
  //   emoji: "🤖",
  //   color: "#059669",
  // },
];

export const JOURNEY = [
  {
    year: "2020",
    title: "University of Lagos",
    desc: "Business Administration — learned how companies really work (and fail).",
    icon: "🎓",
  },
  {
    year: "2024",
    title: "Started Frontend Development",
    desc: "One YouTube tutorial at 2am. That was it. Sleep became optional.",
    icon: "💻",
  },
  {
    year: "2025",
    title: "ALX Frontend Development",
    desc: "Focused study in frontend development through the ALX programme.",
    icon: "📘",
  },
  {
    year: "2026",
    title: "Built Practical Applications",
    desc: "Applied frontend skills to practical web application projects.",
    icon: "🛠️",
  },
  {
    year: "2026",
    title: "Expanded Into Mobile Development",
    desc: "Exploring mobile application development with React Native and Expo.",
    icon: "📱",
  },
  {
    year: "2026",
    title: "Exploring Backend Engineering",
    desc: "Building experience with APIs, server-side code and database foundations.",
    icon: "⚙️",
  },
];

export const TESTIMONIALS = [
  {
    name: "Adaeze Okonkwo",
    role: "CEO, PaySwift Nigeria",
    text: "02Tech delivered our fintech app on time and on budget. The code quality is exceptional — our engineering team was genuinely impressed.",
    avatar: "AO",
  },
  {
    name: "Emeka Nwachukwu",
    role: "Founder, ShopHub",
    text: "Working with 02Tech felt like having a CTO and lead developer in one. They understood the business side AND built a stunning product.",
    avatar: "EN",
  },
  {
    name: "Sarah Adeleke",
    role: "Director, EduBase Schools",
    text: "Our school management system transformed our operations. Teachers stopped complaining about software — that alone is worth a 5-star review.",
    avatar: "SA",
  },
];

export const FUN_KIT = [
  {
    emoji: "🧩",
    title: "Reusable Components",
    desc: "Building maintainable interfaces from focused, reusable pieces.",
  },
  {
    emoji: "📱",
    title: "Responsive Design",
    desc: "Creating experiences that adapt to phones, tablets and desktop screens.",
  },
  {
    emoji: "🧹",
    title: "Clean Code",
    desc: "Writing readable, organized code that is easier to maintain.",
  },
  {
    emoji: "🔍",
    title: "Problem Solving",
    desc: "Debugging issues methodically and improving application behavior.",
  },
];
