import "./MediaButton.css";

export default function MediaButton({ href, ariaLabel, children }) {
  return (
    <a
      className="media-button"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
