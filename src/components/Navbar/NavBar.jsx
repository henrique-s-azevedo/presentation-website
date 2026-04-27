import { Link } from "react-router-dom";
import NavButton from "../Button/NavButton/NavButton.jsx";

export default function NavBar({ isOpen, closeMenu }) {
  return (
    <nav className={`nav ${isOpen ? "open" : ""}`}>
      <ul className="nav-list">
        <li>
          <Link to="/" onClick={closeMenu}>
            <NavButton>Home</NavButton>
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={closeMenu}>
            <NavButton>About</NavButton>
          </Link>
        </li>

        <li>
          <Link to="/projects" onClick={closeMenu}>
            <NavButton>Projects</NavButton>
          </Link>
        </li>

        <li>
          <Link to="/skills" onClick={closeMenu}>
            <NavButton>Skills</NavButton>
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={closeMenu}>
            <NavButton>Contact</NavButton>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
