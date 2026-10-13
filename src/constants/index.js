import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "achievements",
      title: "Achievements",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const services = [
    {
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "AI Agents & RAG",
      icon: backend,
    },
    {
      title: "Competitive Programmer",
      icon: creator,
    },
    {
      title: "Backend & Infrastructure",
      icon: mobile,
    },
  ];

  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];

  const experiences = [
    {
      title: "IT Intern — Software Testing / Product Research",
      company_name: "Wings2Aspirations Start Up India Pvt. Ltd. · Remote",
      date: "Jun 2026 – Jul 2026",
      points: [
        "Performed functional, usability, and AI output testing for MakeMyCareer.AI and Classis.ai across authentication, payments, dashboards, recommendations, and usage limits.",
        "Researched Haajri.in's target users, customer pain points, competitors, product differentiators, and operational requirements to identify improvements and feature opportunities.",
      ],
    },
    {
      title: "B.Tech in Computer Science Engineering",
      company_name: "Maharaja Agrasen Institute of Technology, Delhi",
      date: "Sep 2023 – Present",
      points: [
        "CGPA: 8.12. Strong foundations in data structures and algorithms, OOP, DBMS, and operating systems.",
        "Helped grow MAIT’s competitive programming community to 500+ students and coordinated industry seminars for 100+ participants.",
      ],
    },
    {
      title: "Class XII · CBSE",
      company_name: "DAV Shreshtha Vihar",
      date: "2023",
      points: ["Scored 78.6% in Class XII."],
    },
    {
      title: "Class X · CBSE",
      company_name: "Presidium",
      date: "2021",
      points: ["Scored 94% in Class X."],
    },
  ];

  const testimonials = [];

  const projects = [
    {
      name: "HomeServerAI",
      category: "AI OPERATIONS AGENT",
      description: "A bounded AI agent that investigates home server incidents using diagnostic tools and evolving hypotheses. Combines local Ollama models, schema-constrained tool calling, and Qdrant runbook retrieval with a FastAPI orchestration layer. PostgreSQL audit trails, execution budgets, validation, approval-gated actions, and post-action verification keep operations controlled.",
      tags: [
        { name: "Python · FastAPI", color: "blue-text-gradient" },
        { name: "Ollama · Qdrant", color: "green-text-gradient" },
        { name: "PostgreSQL · Docker", color: "pink-text-gradient" },
      ],
      source_code_link: "https://github.com/Parthmudgal15105/HomeAiAgent",
    },
    {
      name: "CodeDuel",
      category: "FULL-STACK ONLINE JUDGE",
      description: "An online judge that evaluates coding submissions against hidden test cases and records execution results and verdicts. Redis and BullMQ separate submission queuing from worker execution. Isolated Docker containers apply CPU, memory, PID, and network restrictions. Includes authentication, problem management, and submission history; deployed on a personal Linux home server.",
      tags: [
        { name: "React · Node.js · Express", color: "blue-text-gradient" },
        { name: "Redis · BullMQ · Docker", color: "green-text-gradient" },
        { name: "MongoDB · Linux", color: "pink-text-gradient" },
      ],
      source_code_link: "https://github.com/Parthmudgal15105/CodeDuel",
      live_link: "https://codeduel.online",
    },
  ];

  export { services, technologies, experiences, testimonials, projects };
