import { useEffect } from "react";
import Footer from "../Footer/Footer";
import "./GenericBottomPage.css";

export default function GenericBottomPage({ children }) {
  useEffect(() => {
    const el = document.getElementById("generic-bottom-content");
    if (el) {
      setTimeout(() => el.classList.add("show"), 200);
    }
  }, []);

  return (
    <section className="generic-bottom-page">
      <div id="generic-bottom-content" className="generic-bottom-content">
        {children}
      </div>

      <Footer />
    </section>
  );
}