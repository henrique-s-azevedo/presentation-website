import Footer from "../Footer/Footer";
import "./BottomPage.css";

export default function BottomPage({ children }) {
  return (
    <section className="bottom-page">
      <div className="bottom-content">
        {children}
      </div>

      <Footer />
    </section>
  );
}