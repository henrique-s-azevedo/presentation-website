import "./NavButton.css";

export default function NavButton({ href, children }) {
  return (
    <a className="nav-button" href={href}>
      {children}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </a>
  );
}