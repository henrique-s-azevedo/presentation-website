import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TransitionColumns from "../../components/TransitionColumns/TransitionColumns";
import "./HomeTopPage.css";

export default function HomeTopPage() {
  const [trigger, setTrigger] = useState(false);
  const navigate = useNavigate();

  const handleScroll = (e) => {
    if (e.deltaY <= 0) return;
    if (trigger) return;

    setTrigger(true);

    setTimeout(() => {
      navigate("/home");
    }, 1200);
  };

  return (
    <div className="home-top-page" onWheel={handleScroll}>
      <TransitionColumns trigger={trigger} />

      <div className="hero">
        <h1>THIS IS PAGE 1</h1>
        <p>Scroll para continuar</p>
      </div>
    </div>
  );
}