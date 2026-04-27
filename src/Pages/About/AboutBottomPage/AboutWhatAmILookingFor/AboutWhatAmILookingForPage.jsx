import { Link } from "react-router-dom";
import GenericAboutPage from "../../../../components/TopPageComponents/AboutPageComponents/GenericAboutPage/GenericAboutPage.jsx";
import LinkButton from "../../../../components/Button/LinkButton/LinkButton.jsx";

import claudeLogo from "../../../../assets/images/about-page/bottom-page/looking-for/claude-logo.png";
import copilotLogo from "../../../../assets/images/about-page/bottom-page/looking-for/copilot-logo.png";

import "./AboutWhatAmILookingForPage.css";

export default function AboutWhatAmILookingForPage() {
  return (
    <GenericAboutPage title="What I'm Looking For">

      {/* TOP BUTTONS */}
      <div className="looking-top-buttons">
        <a href="#short-term" className="glow-button">Short Term</a>
        <a href="#ai-doubt" className="glow-button">A.I. Era</a>
        <a href="#long-term" className="glow-button">Long Term</a>
      </div>

      {/* SHORT TERM */}
      <h3 id="short-term" className="looking-section-title">Short Term</h3>

      <p>My main goal for now is to be employed as a <span className="bold">junior developer</span>, learn as much as I can, build my work experience and <span className="bold">grow inside the company that gives me an opportunity</span>.</p>

      <p>I'm currently looking for an <span className="bold"> entry‑level position junior dev position</span> in a team that values progression and mentorship and believes in helping new professionals evolve into strong contributors. I'm not searching for a place that expects perfection from day one because, realistically, I would not the able do deliver it.</p>

      <p>I'm fully aware of where I stand, but I also know what I bring: I'm <span className="bold">proactive</span>, <span className="bold"> responsible</span>, and <span className="bold">committed</span>. My mindset is focused on <span className="bold"> continuous improvement</span>, absorbing everything I can from more experienced developers, and gradually taking on more responsibility. I want to grow with the team, contribute to its goals, and become someone the company can rely on long term.</p>

      <div className="cv-button-wrapper">
        <Link to="/contact" className="resume-download cv-button">Talk to me</Link>
      </div>

      {/* AI Era */}
      <h3 id="ai-doubt" className="looking-section-title">The early doubt of the transition: AI.</h3>

      <div className="looking-logos-row">
        <img src={claudeLogo} alt="Claude logo" />
        <img src={copilotLogo} alt="Copilot logo" />
      </div>

      <p>Like many people entering tech today, I’ve felt the fear that artificial intelligence might reduce the demand for new developers — especially juniors. It’s a real concern, and honestly, it’s the only thing that ever made me hesitate when taking the leap into a new career. And I know I’m not alone in that feeling.</p>

      <p>But the more I study, experiment, and especially talk to my students that are professionals in the IT area (developeres, managers, HR...) the more I see AI not as a replacement, but as a <span className="bold">powerful productivity tool</span> and a skill every developer will need. AI still requires context, business rules, constraints, and the deeper reasoning behind a solution. It accelerates development, but it still depends on human judgment, architecture, and decision‑making.</p>

      <p>Because of that, I believe one of the most important skills for future developers will be the ability to <span className="bold"> analyze, validate, and refine AI‑generated code</span>, and to build agents that excel at specific tasks or projects. That requires <span className="bold">well‑structured, technically sound prompts</span>, supported by solid knowledge of architecture, deployment, frameworks, and everything involving the creation of that specific program.</p>

      <p>I don’t want to miss out on this evolution, I want to be part of it. AI becomes a tool, not a threat.</p>

      <p>I’m ready to take the risk. I’m adaptable, motivated, and willing to shape my path according to whatever the tech world becomes. I’ve already started learning how to use this tool effectively, and I’ve adapted to new realities my entire life. I’m ready to do it again.</p>

      <p>Do you disagree with my perspective? <span className="bold">I'd genuinely appreciate your feedback</span>.</p>

      <div className="cv-button-wrapper">
        <Link to="/contact" className="resume-download cv-button">Feedback</Link>
      </div>

      {/* LONG TERM */}
      <h3 id="long-term" className="looking-section-title">Long term goal</h3>

      <p>Naturally, my long‑term path will depend on the company I join and the opportunities it will provide, the needs it will request. But I also have a strong inclination toward the area that first sparked this entire transition: I’ve always been fascinated by <span className="bold"> data science</span>, <span className="bold">analytics</span>, and <span className="bold">big data</span>.</p>

      <p>I know these fields require deeper specialization and often academic training, so reaching them will take time and experience, but it’s not impossible, and it’s something I’ll always keep in mind as I grow.</p>

      <div className="about-bottom-buttons">
        <LinkButton to="/about/programming" arrow="left">My programming path</LinkButton>
        <LinkButton to="/contact" arrow="right">Talk to me</LinkButton>
      </div>

    </GenericAboutPage>
  );
}
