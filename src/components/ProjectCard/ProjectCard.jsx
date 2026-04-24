import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

export default function ProjectCard({ title, image, description, to = "#" }) {
  const [touched, setTouched] = useState(false);

  const handleClick = (e) => {
    const isMobile = window.innerWidth <= 900;

    if (isMobile) {
      if (!touched) {
        e.preventDefault(); // impede navegação no 1º toque
        setTouched(true);

        // remove o estado depois de 2s se o user não clicar outra vez
        setTimeout(() => setTouched(false), 2000);
        return;
      }
    }
  };

  return (
    <Link
      to={to}
      className={`project-card ${touched ? "touched" : ""}`}
      onClick={handleClick}
    >
      <div
        className="project-card-bg"
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="project-card-content">
        <h2 className="project-card-title">{title}</h2>
        <p className="project-card-description">{description}</p>
      </div>
    </Link>
  );
}