import { Link } from "react-router-dom";
import NavButton from "../Button/NavButton/NavButton.jsx";

export default function NavBar({ isOpen }) {
  return (
    <nav className={`nav ${isOpen ? "open" : ""}`}>
      <ul className="nav-list">
        <li><Link to="/"><NavButton>Home</NavButton></Link></li>
        <li><Link to="/about"><NavButton>About</NavButton></Link></li>
        <li><Link to="/projects"><NavButton>Projects</NavButton></Link></li>
        <li><Link to="/skills"><NavButton>Skills</NavButton></Link></li>
        <li><Link to="/contact"><NavButton>Contact</NavButton></Link></li>
      </ul>
    </nav>
  );
}