import { useState } from "react";
import "./Header.css";
import NavBar from "../Navbar/NavBar.jsx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="welcome-message">
        <h1>
          Port<span className="secondary">folio</span>
        </h1>

        <a
          href={`${import.meta.env.BASE_URL}assets/cv/Henrique-Azevedo-dev-curriculum.pdf`}
          download="Henrique-Azevedo-dev-curriculum.pdf"
          className="resume-download"
        >
          Download CV
        </a>
      </div>

      {/* Mobile Burger */}
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* NavBar Closing */}
      <NavBar isOpen={isOpen} closeMenu={closeMenu} />
    </header>
  );
}
