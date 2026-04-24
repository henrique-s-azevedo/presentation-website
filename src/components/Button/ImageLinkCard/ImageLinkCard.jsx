import { Link } from "react-router-dom";
import "./ImageLinkCard.css";

export default function ImageLinkCard({ to, image, label }) {
  return (
    <Link to={to} className="image-link-card">
      <img src={image} alt={label} />

      <div className="overlay">
        <span>{label}</span>
      </div>
    </Link>
  );
}