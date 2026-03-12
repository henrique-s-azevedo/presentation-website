import { useNavigate } from "react-router-dom";
import GenericTopPage from "../../components/GenericTopPage/GenericTopPage";

export default function AboutTopPage() {
  const navigate = useNavigate();

  return (
    <GenericTopPage onScrollNext={() => navigate("/about/content")}>
      <h1>TOP About page</h1>
      <p>Press Down or scroll</p>

      <div className="about-links">
        <div className="about-card" onClick={() => navigate("/about/content")}>
          <img src="/img/about1.jpg" alt="" />
          <span>DOWN</span>
        </div>
      </div>
    </GenericTopPage>
  );
}