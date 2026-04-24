import React from "react";
import DesktopCarousel from "../../components/HomeCarousel/DesktopCarousel.jsx";
import MobileCarousel from "../../components/HomeCarousel/MobileCarousel.jsx";
import "./HomeBottomPage.css";

export default function HomeBottomPage() {
  return (
    <div className="home-bottom-page">
      <div className="desktop-only">
        <DesktopCarousel />
      </div>

      <div className="mobile-only">
        <MobileCarousel />
      </div>
    </div>
  );
}
