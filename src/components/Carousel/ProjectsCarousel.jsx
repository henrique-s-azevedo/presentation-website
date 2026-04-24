import { useState, useEffect } from "react";
import "./ProjectsCarousel.css";
import { Link } from "react-router-dom";

export default function ProjectsCarousel({ slides }) {
  const [classes, setClasses] = useState(["previous", "active", "next"]);
  const [isFrozen, setIsFrozen] = useState(false);
  const [coverIndex, setCoverIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false); // autoplay pause on hover

  const rotate = (direction) => {
    if (isFrozen) return;

    setClasses((prev) => {
      const arr = [...prev];
      if (direction === "next") arr.unshift(arr.pop());
      if (direction === "previous") arr.push(arr.shift());
      return arr;
    });
  };

  const handleClick = (index) => {
    if (isFrozen) return;

    const activeIndex = classes.indexOf("active");

    // If clicking a non‑active slide → rotate
    if (index !== activeIndex) {
      if (classes[index] === "previous") rotate("previous");
      if (classes[index] === "next") rotate("next");
      return;
    }

    // If clicking the active slide → open cover
    setCoverIndex(index);
    setIsFrozen(true);
  };

  const closeCover = () => {
    setCoverIndex(null);
    setIsFrozen(false);
  };

  /* ============================================================
     AUTOPLAY INTELLIGENT
     - pauses when:
       • cover is open
       • user hovers
       • user interacts
     - resumes automatically
  ============================================================ */
  useEffect(() => {
    if (isFrozen || isHovered) return;

    const interval = setInterval(() => {
      rotate("next");
    }, 3000);

    return () => clearInterval(interval);
  }, [isFrozen, isHovered, classes]);

  return (
    <div
      className="projects-carousel-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`projects-carousel-image ${classes[index]}`}
          onClick={() => handleClick(index)}
        >
          <img src={slide.image} alt={slide.title} />

          {/* COVER */}
          {coverIndex === index && (
            <div className="projects-carousel-cover">
              <h3>{slide.title}</h3>

              <Link to={slide.link} className="projects-carousel-btn">
                View Project
              </Link>

              <button className="projects-carousel-close" onClick={closeCover}>
                Close
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
