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

      <p>
        In the short term, my goal is simple but meaningful: to <span className="bold">start as a junior developer</span>,
        learn as much as I can, and <span className="bold">grow inside the company that gives me an opportunity</span>.
      </p>

      <p>
        I'm currently looking for an <span className="bold">entry‑level position</span> in a team that values learning,
        mentorship, and steady progression. I'm not searching for a place that expects perfection from day one —
        because realistically, I'm still at the beginning of my journey. What I'm truly looking for is a company
        that believes in developing talent, creating space for teaching, and helping new professionals evolve
        into strong contributors.
      </p>

      <p>
        I'm fully aware of where I stand, but I also know what I bring: I'm <span className="bold">proactive</span>,
        <span className="bold"> responsible</span>, and <span className="bold">committed</span>. My mindset is focused on
        <span className="bold"> continuous improvement</span>, absorbing everything I can from more experienced developers,
        and gradually taking on more responsibility. I want to grow with the team, contribute to its goals, and
        become someone the company can rely on long term.
      </p>

      <div className="cv-button-wrapper">
        <Link to="/contact" className="resume-download cv-button">
          Talk to me
        </Link>
      </div>

      {/* AI DOUBT */}
      <h3 id="ai-doubt" className="looking-section-title">The only fear of taking a step: AI.</h3>

      <div className="looking-logos-row">
        <img src={claudeLogo} alt="Claude logo" />
        <img src={copilotLogo} alt="Copilot logo" />
      </div>

      <p>
        Like many people entering tech today, I've felt the fear that artificial intelligence might reduce the
        demand for new developers — especially juniors. It's a real concern, and honestly, it's the only thing
        that ever made me hesitate when taking the leap into a new career. And I know I'm not alone in that feeling.
      </p>

      <p>
        But the more I study and experiment, the more I see AI not as a replacement, but as a <span className="bold">
        powerful productivity tool</span>. It can generate code, but it can't understand context, business rules,
        constraints, or the deeper reasoning behind a solution. It accelerates development, but it still depends
        on human judgment, architecture, and decision‑making.
      </p>

      <p>
        Because of that, I believe one of the most important skills for future developers will be the ability to
        <span className="bold"> analyze, validate, and refine AI‑generated code</span>, just like senior developers review
        junior code today. Another essential skill will be the ability to craft a <span className="bold">well‑structured,
        technically sound prompt</span> — and for that, you need real knowledge: architecture, deployment, frameworks,
        languages, and the reasoning behind each choice.
      </p>

      <p>
        I don't want to miss this evolution. I want to be part of it. We won't be "code monkeys"; we'll be
        <span className="bold"> problem solvers</span>, <span className="bold">architects</span>, and <span className="bold">decision makers</span> who guide AI to build what
        needs to be built. AI becomes a partner, not a threat.
      </p>

      <p>
        Even with the uncertainty, I'm ready to take the risk. I'm adaptable, motivated, and willing to shape my
        path according to whatever the tech world becomes. I've adapted to new realities my entire life — and I'm
        ready to do it again.
      </p>

      <p>
        If you disagree with my perspective, <span className="bold">I'd genuinely appreciate your feedback</span>. I want to
        learn from people with more experience.
      </p>

      <div className="cv-button-wrapper">
        <Link to="/contact" className="resume-download cv-button">
          Feedback
        </Link>
      </div>

      {/* LONG TERM */}
      <h3 id="long-term" className="looking-section-title">My ultimate goal.</h3>

      <p>
        For the past two years, my main objective has been to transition into the IT field and build a career as
        a software engineer. I genuinely enjoy creating things, solving problems, and developing solutions —
        programming quickly became something I'm passionate about.
      </p>

      <p>
        In the long term, my path will naturally depend on the company I join and the opportunities it provides.
        But I also know where my curiosity points: <span className="bold">data science</span>, <span className="bold">analytics</span>, and
        <span className="bold"> big data</span>. These areas require deeper specialization and often academic training, so I
        understand that reaching them will take time and experience.
      </p>

      <p>
        That's why software engineering is the perfect entry point for me. It's where I can grow steadily, build
        a strong foundation, and eventually move toward the data‑focused roles I've always been curious about —
        if the opportunity arises.
      </p>

      <div className="about-bottom-buttons">
        <LinkButton to="/about/programming" arrow="left">My programming path</LinkButton>
        <LinkButton to="/contact" arrow="right">Talk to me</LinkButton>
      </div>

    </GenericAboutPage>
  );
}
