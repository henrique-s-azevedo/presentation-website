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
          href="/assets/cv/Henrique-CV.pdf"
          download="Henrique-CV.pdf"
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
