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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "React Developer",
      icon: backend,
    },
    {
      title: "Web Designer",
      icon: creator,
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "HTML/CSS",
      company_name: "",
      // icon: starbucks,
      // iconBg: "#383E56",
      date: "December 2023 - January 2024",
      points: [
        "Acquired proficiency in HTML and CSS languages through self-directed learning.",
        "Mastered the fundamental principles of HTML for structuring web pages effectively, Developed competency in CSS to style and enhance the appearance of web content.",
        "Applied knowledge of HTML and CSS to create responsive and visually appealing web designs",
        "Explored various resources such as online tutorials, documentation, and practical projects to deepen understanding.",
      ],
    },
    {
      title: "Javascript",
      company_name: "",
      // icon: tesla,
      // iconBg: "#E6DEDD",
      date: "January 2024 - Feb 2024",
      points: [
        "Started with foundational concepts of JavaScript, including variables, data types, and control flow structures.",
        "Progressed to more advanced topics such as functions, arrays, objects, and prototypes.",
        "Delved into DOM manipulation to dynamically interact with web page elements and create responsive user interfaces.",
        "Explored asynchronous programming with promises and callbacks to handle operations such as fetching data from servers.",
      ],
    },
    {
      title: "React/Tailwind CSS",
      // company_name: "Shopify",
      // icon: shopify,
      // iconBg: "#383E56",
      date: "March 2024 - April 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Three JS",
      // company_name: "Meta",
      // icon: meta,
      // iconBg: "#E6DEDD",
      date: "April 2024 - Present",
      points: [
        "Delved into Three.js, a powerful JavaScript library for creating 3D graphics and animations in the browser.",
        "Started by understanding the core concepts of 3D graphics, including scenes, cameras, and objects.",
        "Explored the rendering pipeline and learned about materials, textures, and lighting to create realistic and immersive visuals.",
        "Integrated external resources such as models and textures into Three.js projects to enhance realism and complexity.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "3Dshirt Website",
      description:
        "Discover the future of fashion with our immersive website showcasing 3D shirts crafted on Three.js. Experience the innovative blend of technology and style, redefining the way we wear and perceive clothing",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        // {
        //   name: "mongodb",
        //   color: "green-text-gradient",
        // },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      // image: carrent,
      source_code_link: "https://www.linkedin.com/feed/update/urn:li:activity:7177350715026145281/",
    },
    {
      name: "Signup-Page",
      description:
        "I experimented on the implication of a login page using appwrite, React and Tailwind ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "AppWrite",
          color: "pink-text-gradient",
        },
        // {
        //   name: "scss",
        //   color: "pink-text-gradient",
        // },
      ],
      // image: jobit,
      source_code_link: "https://www.linkedin.com/feed/update/urn:li:activity:7175503268834361347/",
    },
    {
      name: "BankApp UI",
      description:
        "Wanted to learn how to make modern looking websites using React JS and implemented a UI based design for initial react learning.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Typescript",
          color: "pink-text-gradient",
        },
      ],
      // image: tripguide,
      source_code_link: "https://github.com/Parthmudgal15105/BankAppUI1",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };