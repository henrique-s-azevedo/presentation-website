import GenericAboutPage from "../../../../components/TopPageComponents/AboutPageComponents/GenericAboutPage/GenericAboutPage.jsx";
import LinkButton from "../../../../components/Button/LinkButton/LinkButton.jsx";

import jsLogo from "../../../../assets/images/about-page/bottom-page/programming-path/js-logo.png";
import javaLogo from "../../../../assets/images/about-page/bottom-page/programming-path/java-logo.png";
import reactLogo from "../../../../assets/images/about-page/bottom-page/programming-path/react-logo.png";
import codeForAllLogo from "../../../../assets/images/about-page/bottom-page/programming-path/codeforall.png";

import "./AboutMyProgrammingPath.css";

export default function AboutMyProgrammingPath() {
  return (
    <GenericAboutPage title="My Programming Path">
      <p>
        Even though I don't have professional experience yet, I've already built several projects to prepare myself for a future career in software development. Working on these early projects helped me understand <span className="bold">real‑world logic</span>, <span className="bold">data handling</span>, and the mindset required to <span className="bold">solve practical problems through code</span>.
      </p>

      <div className="about-row">
        <p>
          My learning journey started with a <span className="bold">JavaScript</span> course, along with <span className="bold">foundational and intermediate HTML and CSS</span>. I chose JavaScript not only because of my first project, which consisted of a data scraper and statistical analysis of that data, but also thanks to the guidance of a senior developer who recommended it as a manageable and versatile starting point. I kept studying consistently, and later another senior developer friend encouraged me to join a <span className="bold">full‑stack developer bootcamp</span>.
        </p>
        <img src={jsLogo} alt="JavaScript Logo" />
      </div>

      <p>His advice was compelling enough that I eventually enrolled.</p>

      <div className="about-row left codeforall-row">
        <img src={codeForAllLogo} alt="Code For All Logo" className="codeforall" />
        <p>
          Last year, I joined the <span className="bold">Code for All Full Stack Program</span>, which I completed at the end of February. There, I worked with both <span className="bold">Java</span> and <span className="bold">JavaScript</span>, but more importantly, I gained hands‑on experience in <span className="bold">backend development</span>: building server‑side applications, working with relational and non‑relational databases, designing and consuming REST APIs, implementing real‑time communication with WebSockets, and applying MVC architecture while following clean‑code and maintainability best practices.
        </p>
      </div>

      <p>
        Along the way, I developed several projects that helped me grow as a developer. One of my first, like I said before, was a <span className="bold">web scraper and data‑analysis tool</span> for a football betting group, replacing a slow and complex Excel workflow with a faster JavaScript solution. I also built internal <span className="bold">tools to support the administrative side</span> of my work at the gym—such as client evaluation management, attendance scoring, user‑interaction frequency, and other metrics—working directly with a live client database.
      </p>

      <p>
        During the bootcamp, I created a <span className="bold">banking application in Java</span>, which strengthened my understanding of backend logic, data structures, and application architecture.
      </p>

      <div className="about-row-multi">
        <img src={javaLogo} alt="Java Logo" />
        <img src={reactLogo} alt="React Logo" />
      </div>

      <p>
        Due to privacy constraints regarding coworker and client information, as well as bootcamp policy concerning the banking application, I can currently showcase only one of those projects publicly, along with my final assignment and the new project I'm working on.
      </p>

      <p>
        I also built this portfolio website, where I deepened my knowledge of <span className="bold">React</span> and applied it to create a complete, responsive, component‑based interface.
      </p>

      <p>
        Right now, I'm focused on <span className="bold">refining what I already know</span>, <span className="bold">improving my efficiency</span>, and becoming faster and more effective in my development workflow.
      </p>

      <div className="about-bottom-buttons">
        <LinkButton to="/about/story" arrow="left">My Story</LinkButton>
        <LinkButton to="/about/lookingfor" arrow="right">Looking For…</LinkButton>
      </div>
    </GenericAboutPage>
  );
}
