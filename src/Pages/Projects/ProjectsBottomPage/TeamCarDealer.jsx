import React from "react";
import GenericProjectsBottomPage from "../../../components/BottomPageComponents/ProjectsPageComponents/GenericProjectsBottomPage.jsx";

// Icons
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

// Image
import CarDealershipImg from "../../../assets/images/projects/top-pages/car-dealership.png";

export default function CarDealerPlatform() {
  return (
    <GenericProjectsBottomPage
      imageSrc={CarDealershipImg}
      title="Car Dealership Platform (Under Construction)"

      sourceCodeLink="https://github.com/your-repo"

      description="This project is a full-stack car dealership platform currently under development. It includes a complete backend and frontend architecture, featuring two types of users: admins and regular users. Admins can add, edit, and remove cars from the catalog, while users can browse available vehicles, save favorites, subscribe to updates, and purchase cars directly through the platform. The goal of this project is to practice and improve the technologies learned during the bootcamp, while building a real-world, scalable application."

      technologies={[
        { name: 'React', icon: <FaReact /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'Spring Boot', icon: <SiSpringboot /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> }
      ]}

      motivation="The purpose of this project is to deepen my understanding of full-stack development by building a practical, real-world application. A car dealership system provides a perfect scenario to practice CRUD operations, authentication, authorization, database modeling, and API communication. It also allows me to explore more advanced concepts such as state management, secure backend logic, and scalable architecture."

      authors={[
        { name: "Henrique Azevedo", github: "https://github.com/xHenriqueAzevedo" }
      ]}
    />
  );
}
