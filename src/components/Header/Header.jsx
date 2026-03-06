import "./Header.css";
import NavBar from "../Navbar/NavBar";

export default function Header() {
  return (
    <header className="header">
      <div className="welcome-message">
        <h1>
          Port<span className="secondary">folio</span>
        </h1>
      </div>

      <NavBar />
    </header>
  );
}