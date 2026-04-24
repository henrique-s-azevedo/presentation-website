import React from "react";
import GenericProjectsBottomPage from "../../../components/BottomPageComponents/ProjectsPageComponents/GenericProjectsBottomPage.jsx";

import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

import FaceImage from "../../../assets/images/projects/bottom-pages/presentation-website/Face-image.png";

export default function PresentationWebsite() {
  return (
    <GenericProjectsBottomPage
      imageSrc={FaceImage} 
      title="Presentation Website"

      //  (replace later with real URLs)
      sourceCodeLink="https://github.com/your-repo"
      liveDemoLink="https://your-live-demo.com"

      description="
        This portfolio website was created as a personal presentation platform
        where I can introduce myself, share my journey into tech, and showcase
        the projects that represent my growth as a developer. It was designed
        with a clean and modern structure, focusing on clarity, usability, and
        a visual identity that reflects who I am. Beyond being a space to
        display my work, it also serves as a practical demonstration of my
        ability to build responsive layouts, organize components, and structure
        a real React application from scratch.
      "

      technologies={[
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "CSS", icon: <FaCss3Alt /> }
      ]}

      motivation="
        I built this project to present myself to recruiters and companies as I
        transition into the tech world. Since I don’t have professional
        experience yet, this website is a way to show my skills, my evolution,
        and my commitment. It was also the project where I truly learned React
        and started working with component-based architecture.
      "
      authors={[{name: "Henrique Azevedo", email: "henriqueazevedo.dev@gmail.com"}]}
    />
  );
}
