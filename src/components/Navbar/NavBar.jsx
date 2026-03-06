import NavButton from "../Button/NavButton/NavButton";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><NavButton href="/">Home</NavButton></li>
        <li className="nav-item"><NavButton href="/about">About</NavButton></li>
        <li className="nav-item"><NavButton href="/projects">Projects</NavButton></li>
        <li className="nav-item"><NavButton href="/path">Path</NavButton></li>
        <li className="nav-item"><NavButton href="/contact">Contact</NavButton></li>
      </ul>
    </nav>
  );
}