import { Link } from "react-router-dom";
import "./LinkButton.css";

export default function LinkButton({ to, children, arrow }) {
  return (
    <Link to={to} className="glow-button">
      {arrow === "left" && <span className="arrow-left">←</span>}
      <span>{children}</span>
      {arrow === "right" && <span className="arrow-right">→</span>}
    </Link>
  );
}
