import "./HardSkillCard.css";

export default function HardSkillCard({ title, text, icon, isOpen, onToggle }) {
  return (
    <div 
      className={`hard-skill-card ${isOpen ? "open" : ""}`}
      onClick={onToggle}
    >
      {/* Closed state */}
      {!isOpen && (
        <div className="hard-skill-card-closed">
          <h3>{title}</h3>

          <div className="hard-skill-icon-wrapper">
            <div className="hard-skill-icon">{icon}</div>
            <div className="hard-skill-card-more">more</div>
          </div>
        </div>
      )}

      {/* Open state */}
      {isOpen && (
        <div className="hard-skill-card-open">
          <div className="hard-skill-section">
            <span className="hard-skill-label">{title}</span>
            <p>{text}</p>
          </div>
        </div>
      )}
    </div>
  );
}
