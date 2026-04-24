import { useEffect, useRef } from "react";
import "./GenericSectionPage.css";

export default function GenericSectionPage({
  title,
  subtitle,
  children
}) {
  // Reference for fade‑in animation
  const ref = useRef(null);

  // Trigger fade‑in animation on mount
  useEffect(() => {
    requestAnimationFrame(() => {
      ref.current.classList.add("show");
    });
  }, []);

  return (
    <section
      className="generic-page generic-top-page"
      ref={ref}
    >
      <div className="generic-content">

        {/* Page title */}
        <h3 className="generic-title">{title}</h3>

        {/* Page subtitle */}
        <p className="generic-subtitle">{subtitle}</p>

        {/* Inner wrapper that holds card row */}
        <div className="generic-inner">
          {children}
        </div>

      </div>
    </section>
  );
}
