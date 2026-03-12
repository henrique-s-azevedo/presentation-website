import { useEffect, useRef } from "react";
import "./TransitionColumns.css";

export default function TransitionColumns({ trigger }) {
  const colsRef = useRef([]);

  useEffect(() => {
    if (!trigger) return;

    colsRef.current.forEach((col, i) => {
      col.style.visibility = "visible";
      col.style.transitionDelay = `${i * 0.1}s`;
      col.style.transform = "scaleY(1)";
    });
  }, [trigger]);

  return (
    <div className="transition">
      <div className="columns">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="col"
            ref={(el) => (colsRef.current[i] = el)}
          />
        ))}
      </div>
    </div>
  );
}