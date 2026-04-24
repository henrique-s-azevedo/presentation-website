import React from "react";
import {
  FaJava,
  FaReact,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaServer,
  FaCogs,
  FaNetworkWired,
  FaCode
} from "react-icons/fa";

export const bootcampTechs = [
  {
    name: "Java",
    icon: <FaJava />,
    desc: "Used as the primary backend language throughout the bootcamp. Developed console applications, small games, a full banking system, and the backend of the final project using OOP principles, data structures, and clean code practices."
  },
  {
    name: "MVC Architecture",
    icon: <FaCogs />,
    desc: "Applied the Model–View–Controller architecture across all major bootcamp projects, including the banking application and final assignment. Ensured clean separation of concerns, modularity, and maintainability in backend development."
  },
  {
    name: "Spring",
    icon: <FaCogs />,
    desc: "Learned dependency injection, inversion of control, and component‑based backend development using the Spring framework to structure scalable server‑side applications."
  },
  {
    name: "Spring Boot",
    icon: <FaCogs />,
    desc: "Transitioned from raw Spring to Spring Boot to accelerate development of REST APIs. Used auto‑configuration, embedded servers, and simplified project setup to deliver the final assignment efficiently."
  },
  {
    name: "WebSockets",
    icon: <FaNetworkWired />,
    desc: "Implemented real‑time communication using WebSockets. Built a live chat application as part of the bootcamp, enabling persistent bidirectional communication between clients and the server."
  },
  {
    name: "Client–Server Architecture",
    icon: <FaServer />,
    desc: "Designed and developed applications following client–server communication principles, handling request–response cycles, routing, and data flow between frontend and backend."
  },
  {
    name: "Servlets",
    icon: <FaCode />,
    desc: "Used Java Servlets to understand low‑level HTTP handling, including request parsing, response building, session management, and routing before transitioning to Spring Boot."
  },
  {
    name: "JDBC",
    icon: <FaDatabase />,
    desc: "First exposure to relational databases. Used JDBC to connect Java applications to SQL databases, execute queries, manage connections, and understand how persistence layers work."
  },
  {
    name: "PostgreSQL",
    icon: <FaDatabase />,
    desc: "Designed relational schemas and wrote SQL queries for multiple projects, including a video store system, the banking application, and the final assignment."
  },
  {
    name: "REST APIs",
    icon: <FaServer />,
    desc: "Built and consumed RESTful endpoints across several bootcamp projects. Implemented CRUD operations, routing, controllers, DTOs, and API documentation."
  },
  {
    name: "JavaScript (Basics)",
    icon: <FaJs />,
    desc: "Used JavaScript fundamentals for DOM manipulation and basic frontend logic, mainly in the banking application and final project."
  }
];

export const selfLearningTechs = [
  {
    name: "Git",
    icon: <FaGitAlt />,
    desc: "Used for version control, branching strategies, and collaborative workflows. Applied daily during the bootcamp and reinforced through Udemy courses."
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    desc: "Managed repositories, pull requests, issues, and project hosting. Main platform used for submitting and reviewing bootcamp assignments."
  },
  {
    name: "React",
    icon: <FaReact />,
    desc: "Built component‑based UIs using hooks, props, state management, and reusable layouts. Applied it fully in the development of this portfolio."
  },
  {
    name: "JavaScript (ES6+)",
    icon: <FaJs />,
    desc: "Can applied modern JavaScript features such as async/await, arrow functions, destructuring, modules, and array methods to write cleaner and more efficient code."
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
    desc: "Structured semantic, accessible, and SEO‑friendly web pages using modern HTML standards."
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    desc: "Styled responsive layouts using Flexbox, Grid, CSS variables, animations, and component‑driven design principles."
  }
];
