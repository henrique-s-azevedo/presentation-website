import { useEffect, useRef } from "react";
import "./GenericTopPage.css";

export default function GenericTopPage({ children, onScrollNext }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("show");
  }, []);

  const handleScroll = (e) => {
    if (e.deltaY > 0 && onScrollNext) {
      onScrollNext();
    }
  };

  return (
    <section className="generic-top-page" ref={ref} onWheel={handleScroll}>
      {children}
    </section>
  );
}