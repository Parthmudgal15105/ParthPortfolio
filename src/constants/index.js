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
      title: "Backend & Cloud Engineer",
      icon: backend,
    },
    {
      title: "Competitive Programmer",
      icon: creator,
    },
    {
      title: "DevOps & Systems",
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
      title: "B.Tech Computer Science Engineering",
      company_name: "Maharaja Agrasen Institute of Technology, Delhi",
      date: "Sep 2023 – Present",
      points: [
        "Maintaining a CGPA of 8.02 while actively building and shipping production-grade software.",
        "Ranked among the top 5 competitive programmers at MAIT based on active contest performance.",
        "Grew the college competitive programming community to 500+ students through outreach and peer learning initiatives.",
        "Coordinated technical seminars with industry speakers, including Google engineers, for 100+ students.",
      ],
    },
    {
      title: "Competitive Programming",
      company_name: "Codeforces · CodeChef",
      date: "2023 – Present",
      points: [
        "Codeforces Specialist with a peak rating of 1417 — consistently placed in top 20–25% globally in Div. 2 rounds.",
        "CodeChef 3-star rated with a max rating of 1671.",
        "Global Rank 284 in CodeChef Starters 180, Rank 535 in Starters 196, and Rank 676 in Starters 170.",
        "Global Rank 2192 in Codeforces Round 1082 (Div. 2), 2164 in Round 1003 (Div. 4), and 2934 in Round 1016 (Div. 3).",
      ],
    },
    {
      title: "Full-Stack Development",
      company_name: "Self-Directed · Open Source",
      date: "2024 – Present",
      points: [
        "Built and deployed CodeDuel — a production MERN online judge with Docker-sandboxed code execution, live at codeduel.online.",
        "Engineered CollabCode — a real-time collaborative coding platform with WebRTC video, Socket.io signalling, and JWT auth.",
        "Built Chunky — a resumable file upload platform handling files up to 1 GB with session-based chunk tracking.",
        "Deployed applications on AWS EC2 with Nginx reverse proxy, Docker containers, and custom domains for public access.",
      ],
    },
  ];

  const testimonials = [];

  const projects = [
    {
      name: "CodeDuel",
      description:
        "Production MERN online judge that compiles, runs, and evaluates coding submissions with automated verdicts. Uses queue-based async evaluation, Docker-sandboxed execution for safety, Redis for job queuing, and leaderboard tracking. Deployed live on AWS EC2 with Nginx at codeduel.online.",
      tags: [
        {
          name: "React · Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Docker · Redis",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB · AWS",
          color: "pink-text-gradient",
        },
      ],
      source_code_link: "https://github.com/Parthmudgal15105/CodeDuel",
    },
    {
      name: "CollabCode",
      description:
        "Real-time collaborative coding platform with JWT auth, guest access, private rooms, Monaco editor with cursor broadcasting, and debounced MongoDB persistence for reconnect recovery. WebRTC video via Socket.io signalling enables pair programming and technical interviews inside shared rooms.",
      tags: [
        {
          name: "TypeScript · React",
          color: "blue-text-gradient",
        },
        {
          name: "Socket.io · WebRTC",
          color: "green-text-gradient",
        },
        {
          name: "Node.js · MongoDB",
          color: "pink-text-gradient",
        },
      ],
      source_code_link: "https://github.com/Parthmudgal15105/CollabCode",
    },
    {
      name: "Chunky",
      description:
        "Full-stack file upload platform supporting chunked and resumable transfers for files up to 1 GB. Features retryable chunk logic, session-based upload tracking, and validation APIs built for unstable networks. Includes real-time progress and upload history with resume, download, and delete workflows.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js · Express",
          color: "green-text-gradient",
        },
        {
          name: "SQLite",
          color: "pink-text-gradient",
        },
      ],
      source_code_link: "https://github.com/Parthmudgal15105/FileUploadReal",
    },
  ];

  export { services, technologies, experiences, testimonials, projects };