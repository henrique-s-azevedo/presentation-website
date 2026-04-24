import React from "react";
import GenericProjectsBottomPage from "../../../components/BottomPageComponents/ProjectsPageComponents/GenericProjectsBottomPage.jsx";

// Icons
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

// Image
import TeamSafetyMonitorImg from "../../../assets/images/projects/bottom-pages/team-safety-monitor/teamsafetymonitor-top-img.png";


export default function TeamSafetyMonitor() {
  return (
    <GenericProjectsBottomPage
      imageSrc={TeamSafetyMonitorImg}
      title="Team Safety Monitor"

      // Replace these later with real URLs if needed
      sourceCodeLink="https://github.com/your-repo"

      description="
        This project was developed as the final assignment of our bootcamp,
        where we were given a health-related theme and tasked with building
        a complete SPA. Our team decided to create a platform designed for
        companies to monitor workload levels and detect early signs of burnout
        among employees and teams. The system includes two types of users:
        admins, who manage teams and monitor their status, and workers, who
        simply need to answer daily questionnaires and submit their work-related
        metrics. The goal is to help organizations identify risks early and
        promote healthier work environments.
      "

      technologies={[
        { name: 'React', icon: <FaReact /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'Spring Boot', icon: <SiSpringboot /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> }
      ]}

      motivation="
        We chose this topic because excessive workload and burnout have become
        real and growing problems in modern workplaces. Our goal was to create
        a tool that could help companies detect these issues early and support
        their employees' well-being. This project allowed us to combine
        technical development with a meaningful real-world purpose.
      "

      authors={[
        "Henrique Azevedo",
        "Cátia Vilarinho",
        "Diogo XXX",
        "Rui Alves",
        "Kafir"
      ]}
    />
  );
}
