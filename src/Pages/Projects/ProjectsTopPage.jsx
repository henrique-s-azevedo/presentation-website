import { useNavigate } from "react-router-dom";
import GenericTopPage from "../../components/GenericTopPage/GenericTopPage";

export default function ProjectsTopPage() {
  const navigate = useNavigate();

  return (
    <GenericTopPage onScrollNext={() => navigate("/projects/content")}>
      <h1>Top Projects Page</h1>
      <p>Project list.....</p>

      <div className="project-links">
        <div className="project-card" onClick={() => navigate("/projects/content")}>
          <img src="/img/project1.jpg" alt="" />
          <span>DOWN</span>
        </div>
      </div>
    </GenericTopPage>
  );
}