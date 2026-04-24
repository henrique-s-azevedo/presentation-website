import React, { useState, useEffect } from "react";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";
import { desktopImages } from "./carouselData";
import "./HomeCarousel.css";

export default function DesktopCarousel() {
  const [current, setCurrent] = useState(0);

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % desktopImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const getPosition = (index) => {
    const total = desktopImages.length;
    return (index - current + total) % total;
  };

  return (
    <div className="desktop-carousel">
      {desktopImages.map((item, index) => {
        const pos = getPosition(index);

        return (
          <div key={index} className={`carousel-slot slot-${pos}`}>
            <ProjectCard
              title={item.meta.title}
              description={item.meta.description}
              image={item.image}
              to={item.route}
            />
          </div>
        );
      })}
    </div>
  );
}
