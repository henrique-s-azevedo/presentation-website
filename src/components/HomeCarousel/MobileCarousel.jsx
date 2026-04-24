import React, { useState, useEffect, useRef } from "react";
import CarouselCover from "./CarouselCover.jsx";
import "./HomeCarousel.css";

import {
  mobileImages,
  formatTitle
} from "./carouselData";

export default function MobileCarousel() {
  const [current, setCurrent] = useState(0);
  const [coverOpen, setCoverOpen] = useState(false);
  const [coverData, setCoverData] = useState({ title: "", route: "" });

  const touchStart = useRef(null);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % mobileImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const openCover = (item) => {
    setCoverData({ title: item.title, route: item.route });
    setCoverOpen(true);
  };

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - touchStart.current;

    if (diff > 50) {
      setCurrent((prev) => (prev - 1 + mobileImages.length) % mobileImages.length);
    } else if (diff < -50) {
      setCurrent((prev) => (prev + 1) % mobileImages.length);
    }
  };

  return (
    <div
      className="mobile-carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={mobileImages[current].image}
        alt=""
        className="mobile-slide"
        onClick={() => openCover(mobileImages[current])}
      />

      <CarouselCover
        isOpen={coverOpen}
        onClose={() => setCoverOpen(false)}
        title={coverData.title}
        route={coverData.route}
      />
    </div>
  );
}
