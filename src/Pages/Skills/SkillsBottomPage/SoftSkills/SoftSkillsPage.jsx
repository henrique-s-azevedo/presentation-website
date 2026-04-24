import { useState } from "react";
import "./SoftSkillsPage.css";

import SkillCard from "../../../../components/BottomPageComponents/SkillsPageComponents/SkillCard/SkillCard.jsx";
import { skillsData } from "../../../../components/BottomPageComponents/SkillsPageComponents/SkillCard/SkillsData.js";
import LinkButton from "../../../../components/Button/LinkButton/LinkButton.jsx";

export default function SoftSkillsPage() {
  // Track which card is open (null = none)
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="softskills-section" id="softskills">
      <h2 className="heading">
        My Soft Skills
        <span className="animate scroll" style={{ "--i": 1 }}></span>
      </h2>

      <div className="softskills-row">
        <div className="softskills-column">
          <h3 className="title">
            <p>
              Although my technical programming skills are still evolving, I believe that
              <span className="bold"> soft skills are equally decisive</span> and probably a major factor in my hiring decision.
            </p>

            <p>
              Throughout my years of work, I’ve developed abilities that make me a
              <span className="bold"> versatile</span>, <span className="bold">responsible</span>, and
              <span className="bold"> reliable professional</span> for any company willing to teach me their processes and ways of working.
            </p>

            <p>
              That’s why I’ve highlighted 10 competencies I consider essential. If you can spend the time, you can
              <span className="bold"> click and explore how they can be translated to IT development</span>.
            </p>

            <span className="animate scroll" style={{ "--i": 2 }}></span>
          </h3>

          {/* SKILL CARDS */}
          <div className="softskills-box">
            {skillsData.map((skill, index) => (
              <div className="softskills-content" key={index}>
                <div className="content">
                  <SkillCard
                    title={skill.title}
                    topText={skill.topText}
                    bottomText={skill.bottomText}
                    isOpen={openIndex === index}
                    onToggle={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  />
                </div>
              </div>
            ))}

            <span className="animate scroll" style={{ "--i": 3 }}></span>
          </div>

          {/* Navigation link to hard skills section */}
          <div className="to-hard-skills-button">
            <LinkButton to="/skills/hardskills" arrow="right">
              Hard Skills
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
