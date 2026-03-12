import { useNavigate } from "react-router-dom";
import GenericTopPage from "../../components/GenericTopPage/GenericTopPage";

export default function PathTopPage() {
  const navigate = useNavigate();

  return (
    <GenericTopPage onScrollNext={() => navigate("/path/content")}>
      <h1>Top Skills Page</h1>
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