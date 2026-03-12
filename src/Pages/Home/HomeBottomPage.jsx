import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TransitionColumns from "../../components/TransitionColumns/TransitionColumns";
import "./HomeBottomPage.css";

export default function HomeBottomPage() {
  const [trigger, setTrigger] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("content").classList.add("show");
    }, 300);
  }, []);

  const handleClick = () => {
    if (trigger) return;

    setTrigger(true);

    setTimeout(() => {
      navigate("/");
    }, 1200);
  };

  return (
    <div className="home-bottom-page">
      <TransitionColumns trigger={trigger} />

      <div className="hero" id="content">
        <h1>THIS IS PAGE 2</h1>
        <button onClick={handleClick}>Voltar à Página 1</button>
      </div>
    </div>
  );
}