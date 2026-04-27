import "./GenericProjectsBottomPage.css";

export default function GenericProjectsBottomPage({
  imageSrc,
  title,
  sourceCodeLink,
  liveDemoLink,
  description,
  technologies,
  motivation,
  authors
}) {
  return (
    <section className="generic-projects-bottom-page">

      {/* IMAGE */}
      <div className="project-image-wrapper">
        <img src={imageSrc} alt={title} className="project-image" />
      </div>

      {/* TITLE */}
      <h2 className="project-title">{title}</h2>

      {/* LINKS */}
      <div className="project-links">
        {sourceCodeLink && (
          <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        )}
        {liveDemoLink && (
          <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
            Website
          </a>
        )}
      </div>

      {/* TECHNOLOGIES */}
      <div className="project-section">
        <div className="project-technologies">
          {technologies?.map((tech, index) => (
            <div key={index} className="tech-item">
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="project-section">
        <h3 className="project-subtitle">Description</h3>
        <p className="project-description">{description}</p>
      </div>

      {/* MOTIVATION */}
      <div className="project-section">
        <h3 className="project-subtitle">Motivation</h3>
        <p className="project-motivation">{motivation}</p>
      </div>

      {/* AUTHORS */}
      <div className="project-authors">
        <h3 className="project-subtitle">Authors</h3>
        <ul>
          {authors?.map((author, index) => (
            <li key={index}>
              <span className="author-name">{author.name}</span>
              {" – "}
              <a
                href={author.github}
                target="_blank"
                rel="noopener noreferrer"
                className="author-github"
              >
                GitHub
              </a>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}
