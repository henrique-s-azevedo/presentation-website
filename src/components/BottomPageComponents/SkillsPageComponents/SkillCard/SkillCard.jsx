import "./SkillCard.css";

// Expandable skill card component - controlled externally
export default function SkillCard({ title, topText, bottomText, isOpen, onToggle }) {
  return (
    <div 
      className={`skill-card ${isOpen ? "open" : ""}`}
      onClick={onToggle}
    >
      {/* Closed state */}
      {!isOpen && (
        <div className="skill-card-closed">
          <h3>{title}</h3>
          <div className="skill-card-more">more</div>
        </div>
      )}

      {/* Open state */}
      {isOpen && (
        <div className="skill-card-open">
          <div className="skill-section">
            <span className="skill-label">FITNESS</span>
            <p>{topText}</p>
          </div>

          <div className="skill-section">
            <span className="skill-label">IT</span>
            <p>{bottomText}</p>
          </div>
        </div>
      )}
    </div>
  );
}
