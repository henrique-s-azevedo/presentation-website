import "./NavButton.css";

export default function NavButton({ children }) {
  return (
    <div className="nav-button">
      {children}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}