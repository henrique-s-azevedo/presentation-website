// src/components/TopPageComponents/AboutPageComponents/GenericAboutPage/GenericAboutPage.jsx
import "./GenericAboutPage.css";

export default function GenericAboutPage({ title, children, onNext, onPrev }) {
  return (
    <section className="about-section">
      {/* Page title */}
      <h2 className="about-heading">{title}</h2>

      {/* Main content */}
      <div className="about-content">
        {children}
      </div>

      {/* Optional navigation buttons */}
      <div className="about-navigation">
        {onPrev && (
          <button className="about-nav-button" onClick={onPrev}>
            Previous
          </button>
        )}

        {onNext && (
          <button className="about-nav-button" onClick={onNext}>
            Next
          </button>
        )}
      </div>
    </section>
  );
}
