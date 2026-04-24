import ProjectsCarousel from "../../Carousel/ProjectsCarousel.jsx";
import "./GenericProjectsTopPage.css";

/**
 * GenericProjectsTopPage
 * ------------------------------------------------------------
 * Layout used for the top-level Projects page.
 * Includes title, subtitle, and a carousel of project slides.
 */
export default function GenericProjectsTopPage({ title, subtitle, slides }) {
  return (
    <section className="generic-projects-top-page">
      <h1 className="projects-top-title">{title}</h1>
      <p className="projects-top-subtitle">{subtitle}</p>

      {/* Carousel (requires slides array) */}
      <ProjectsCarousel slides={slides} />
    </section>
  );
}
