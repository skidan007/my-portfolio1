export const NAV_LINKS = ["About", "Services", "Stack", "Projects", "Journey", "Contact"];

export const SERVICES = [
  { icon: "🌐", title: "Full Stack Web Dev", desc: "End-to-end web apps — from pixel-perfect frontends to rock-solid APIs. Yes, both sides." },
  { icon: "📱", title: "Mobile App Dev", desc: "React Native & Flutter apps that run smoothly on iOS and Android — no excuses." },
  { icon: "🎨", title: "UI/UX Design", desc: "Figma-first, user-obsessed design that makes people go 'wow' instead of 'where do I click?'" },
  { icon: "⚡", title: "API Development", desc: "RESTful and GraphQL APIs so clean you could frame them on the wall." },
  { icon: "🗄️", title: "Database Architecture", desc: "SQL, NoSQL, and everything in between — your data is in safe hands." },
  { icon: "💼", title: "Business-Oriented Tech", desc: "Thanks to UNILAG Business Admin, I build things that actually make business sense. Rare." },
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
    { name: "Firebase", color: "#FFCA28" },
    { name: "Figma", color: "#F24E1E" },
    { name: "Docker", color: "#2496ED" },
  ],
};

export const PROJECTS = [
  {
    title: "Fintech Mobile App",
    desc: "Cross-platform mobile banking app with real-time transfers, spending analytics, and biometric auth.",
    tags: ["React Native", "Node.js", "PostgreSQL"],
    emoji: "💰",
    color: "#00C9C8",
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-featured storefront with cart, Stripe payments, admin dashboard, and inventory management.",
    tags: ["Next.js", "Express", "MongoDB"],
    emoji: "🛍️",
    color: "#1A6FD4",
  },
  {
    title: "School Management System",
    desc: "Complete school ERP — attendance, grades, timetables, and parent portals. Teachers actually like it.",
    tags: ["React", "Node.js", "PostgreSQL"],
    emoji: "🎓",
    color: "#7C3AED",
  },
  // {
  //   title: "AI SaaS Dashboard",
  //   desc: "Analytics dashboard with AI-powered insights, real-time charts, and multi-tenant architecture.",
  //   tags: ["Next.js", "TypeScript", "Firebase"],
  //   emoji: "🤖",
  //   color: "#059669",
  // },
  {
    title: "Logistics Tracking App",
    desc: "Live package tracking with driver assignment, route optimization, and customer notifications.",
    tags: ["React Native", "Express", "MongoDB"],
    emoji: "🚚",
    color: "#D97706",
  },
];

export const JOURNEY = [
  { year: "2020", title: "University of Lagos", desc: "Started Business Administration — learned how companies really work (and fail).", icon: "🎓" },
  { year: "2024", title: "Fell into Web Dev", desc: "One YouTube tutorial at 2am. That was it. Sleep became optional.", icon: "💻" },
  { year: "2025", title: "Full Stack Developer", desc: "Backend, frontend, databases — if it runs on a server, I've probably broken it once.", icon: "⚡" },
  { year: "2026", title: "Expanded to Mobile", desc: "React Native first, then Flutter. Now apps live in pockets, not just browsers.", icon: "📱" },
  { year: "2026", title: "Founded DeeTech", desc: "Combined business knowledge + tech skills. Building products that actually make money.", icon: "🚀" },
];

export const TESTIMONIALS = [
  {
    name: "Adaeze Okonkwo",
    role: "CEO, PaySwift Nigeria",
    text: "DeeTech delivered our fintech app on time and on budget. The code quality is exceptional — our engineering team was genuinely impressed.",
    avatar: "AO",
  },
  {
    name: "Emeka Nwachukwu",
    role: "Founder, ShopHub",
    text: "Working with DeeTech felt like having a CTO and lead developer in one. They understood the business side AND built a stunning product.",
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
  { emoji: "🌯", title: "Debugging Fuel", desc: "Shawarma. One wrap and suddenly the bug is obvious. Chicken > Stack Overflow." },
  { emoji: "😱", title: "Developer Nightmares", desc: "Pushing to main on a Friday. CSS in production. 'It works on my machine.'" },
  { emoji: "🐛", title: "99 Bugs…", desc: "99 bugs in the code, 99 bugs in the code — take one down, patch it around… 127 bugs in the code." },
  { emoji: "☕", title: "Coffee Level", desc: "Current status: ████████░░ 80% — optimal coding zone. Below 50% = dangerous territory." },
];
