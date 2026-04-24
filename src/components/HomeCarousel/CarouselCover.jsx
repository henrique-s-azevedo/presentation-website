import React from "react";
import "./HomeCarousel.css";
import { useNavigate } from "react-router-dom";

export default function CarouselCover({ isOpen, onClose, title, route }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="carousel-cover">
      <div className="carousel-cover-content">
        <h1>{title}</h1>

        <div className="carousel-cover-buttons">
          <button className="go-btn" onClick={() => navigate(route)}>
            Go
          </button>

          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
