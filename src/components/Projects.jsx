import SectionWrapper from "./ui/SectionWrapper";
import SectionHeader from "./ui/SectionHeader";
import ProjectCard from "./ui/ProjectCard";

const projects = [
  {
    title: "AI-Powered Precision Agriculture Advisor 🌾",

    short:
      "AI-driven system for crop planning, disease detection, irrigation, and yield prediction.",

    details:
      "End-to-end intelligent agriculture platform using ML models for crop recommendation, yield prediction, CNN-based disease detection, irrigation scheduling, weather API integration, and market trend analysis.",

    tech: [
      "React",
      "Node.js",
      "Python",
      "Machine Learning",
      "CNN",
      "Weather APIs",
    ],

    github:
      "https://github.com/Punyashree-4143/AI-Powered-Precision-Agriculture-Advisor",

    paper:
      "https://ijarcce.com/papers/ai-powered-precision-agriculture-advisor/",
  },

  {
    title: "SkillTrade – AI-Powered Skill Exchange Platform",

    short:
      "Full-stack platform enabling users to exchange skills, connect, and collaborate through real-time interactions.",

    details:
      "Built a modern barter-based skill exchange platform with JWT authentication, protected routes, user dashboards, notifications, messaging system, and swap request workflows. Designed responsive frontend and scalable backend APIs with FastAPI and MongoDB deployment architecture.",

    tech: [
      "React",
      "FastAPI",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "REST APIs",
      
    ],

    github:
      "https://github.com/Punyashree-4143/skilltrade",

    live:
      "https://skilltrade-eight.vercel.app",
  },

  {
    title: "Event-Driven Real-Time Hyperlocal Commerce System",

    short:
      "Real-time hyperlocal commerce platform built on event-driven architecture.",

    details:
      "Full-stack system with WebSocket-based real-time order lifecycle, atomic inventory updates, and role-based dashboards for customer, vendor, and delivery.",

    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Event-Driven Architecture",
    ],

    github:
      "https://github.com/Punyashree-4143/Event-Driven-Real-Time-Hyperlocal-Commerce-Orchestration-System",

    demos: {
      customer: "https://hyperlocal-grocery-platform.vercel.app/",
      vendor: "https://hyperlocal-grocery-platform-8dad.vercel.app/",
      delivery: "https://hyperlocal-grocery-platform-csrd.vercel.app/",
    },
  },

  {
    title: "AI Code Quality & Security Gate with CI/CD Enforcement",

    short:
      "AI-driven code analysis system with automated CI/CD validation.",

    details:
      "AST-based multi-file analysis engine detecting security risks and architectural issues. Generates weighted risk scoring with PASS / WARN / BLOCK decisions and integrates with GitHub Actions for automated deployment control.",

    tech: [
      "React",
      "FastAPI",
      "Python",
      "AST Analysis",
      "Security Rules",
      "GitHub Actions",
      "CI/CD",
    ],

    github:
      "https://github.com/Punyashree-4143/AI-Code-Quality-and-Security-Gate-with-CI-CD-Enforcement",

    live:
      "https://ai-based-code-quality-and-security.vercel.app/",
  },
];

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      bgClass="bg-[#0a0a0f]"
    >
      <SectionHeader
        title="Projects"
        subtitle="Systems I've designed, built, and deployed."
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}