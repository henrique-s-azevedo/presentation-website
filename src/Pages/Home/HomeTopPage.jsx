import { useEffect } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import "./HomeTopPage.css";
import homeImg from "../../assets/images/home-page/top-page/hero-image.png";
import ScrollButton from "../../components/Button/ScrollButton/ScrollButton.jsx";
import { FaGithub, FaLinkedin, FaWhatsapp, FaChevronDown  } from "react-icons/fa";

export default function HomeTopPage() {
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: ["Junior Developer", "Driven Professional", "Problem Solver", "Team Player"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <>
    <div className="home-top-wrapper">
      <div className="home-left">
        <h3>Hello, my name is</h3>
        <h1>Henrique Azevedo</h1>
        <h3>
          And I'm a <span className="multiple-text"></span>
        </h3>

        <p className="motivational">
          Every day I build, learn, and push forward to become better than yesterday. 
          See why I'm the right candidate for your job <Link to="/presentation" className="ternary-color bold">here</Link>.
        </p>

<div className="social-media">
  <a
    href="https://github.com/xHenriqueAzevedo"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/henrique-azevedo-9615222b3/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://wa.me/351914522322"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-icon"
  >
    <FaWhatsapp />
  </a>
</div>

        <div className="btn-scroll-container">
          <ScrollButton to="/about" className="scroll-down-btn">
            <FaChevronDown />
          </ScrollButton>
        </div>
      </div>

      <div className="home-right">
        <img src={homeImg} alt="Henrique" />
      </div>
    </div>
    </>
  );
}