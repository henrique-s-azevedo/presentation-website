import { useState, useRef } from "react";
import "./HardSkillsPage.css";

import HardSkillCard from "../../../../components/BottomPageComponents/SkillsPageComponents/HardSkillCard/HardSkillCard.jsx";
import { bootcampTechs, selfLearningTechs } from "../../../../components/BottomPageComponents/SkillsPageComponents/HardSkillCard/hardSkillData.jsx";
import LinkButton from "../../../../components/Button/LinkButton/LinkButton.jsx";

export default function HardSkillsPage() {
  const [openCard, setOpenCard] = useState(null);
  const [openTechIndex, setOpenTechIndex] = useState(null);

  // Refs for scrolling
  const bootcampHeaderRef = useRef(null);
  const selfHeaderRef = useRef(null);

  // Smooth scroll with offset (null fixed header)
  const scrollWithOffset = (element) => {
    const yOffset = -120;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const toggleMainCard = (card) => {
    if (openCard === card) {
      setOpenCard(null);
      setOpenTechIndex(null);
    } else {
      setOpenCard(card);
      setOpenTechIndex(null);

      setTimeout(() => {
        if (card === "bootcamp" && bootcampHeaderRef.current) {
          scrollWithOffset(bootcampHeaderRef.current);
        }
        if (card === "self" && selfHeaderRef.current) {
          scrollWithOffset(selfHeaderRef.current);
        }
      }, 50);
    }
  };

  return (
    <section className="hard-section">
      <h2 className="hard-heading">My Technical Skills</h2>

      <div className="hard-row">
        <div className="hard-column">
 
          {/* INTRO TEXT */}
          <p className="hard-intro">
            These are the technical competencies I developed through my <span className="bold">full‑stack bootcamp</span>
            and my <span className="bold">ongoing self‑learning</span> journey, supported by courses taken on platforms
            such as Udemy and reinforced through hands‑on projects both inside and outside
            those programs.
          </p>

          <p className="hard-intro">
            All of these <span className="bold">skills are learned and actively used</span>, but they continue to evolve as I deepen my knowledge and 
            <span className="bold"> refine what I already know</span>, always aiming to improve my work and code quality.
          </p>

          <p className="hard-intro">
            In each card, you can see where I learned the technology and some of the ways I
            explored and applied the language, architecture, library or framework.
          </p>

          {/* TIMELINE WRAPPER */}
          <div className="hardskills-box">

            {/* BOOTCAMP CARD */}
            <div className="hardskills-content">
              <div className={`hard-card ${openCard === "bootcamp" ? "open" : ""}`}>

                <div
                  className="hard-card-header"
                  ref={bootcampHeaderRef}
                  onClick={() => toggleMainCard("bootcamp")}
                >
                  <h3>Bootcamp — Code for All</h3>
                  <div className={`hard-card-more ${openCard === "bootcamp" ? "open" : ""}`}>
                    {openCard === "bootcamp" ? "hide" : "more"}
                  </div>
                </div>

                {openCard === "bootcamp" && (
                  <div className="hard-card-body">
                    {bootcampTechs.map((tech, index) => (
                      <HardSkillCard
                        key={index}
                        title={tech.name}
                        text={tech.desc}
                        icon={tech.icon}
                        isOpen={openTechIndex === index}
                        onToggle={() =>
                          setOpenTechIndex(openTechIndex === index ? null : index)
                        }
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* SELF LEARNING CARD */}
            <div className="hardskills-content">
              <div className={`hard-card ${openCard === "self" ? "open" : ""}`}>

                <div
                  className="hard-card-header"
                  ref={selfHeaderRef}
                  onClick={() => toggleMainCard("self")}
                >
                  <h3>Self‑Learning</h3>
                  <div className={`hard-card-more ${openCard === "self" ? "open" : ""}`}>
                    {openCard === "self" ? "hide" : "more"}
                  </div>
                </div>

                {openCard === "self" && (
                  <div className="hard-card-body">
                    {selfLearningTechs.map((tech, index) => (
                      <HardSkillCard
                        key={index}
                        title={tech.name}
                        text={tech.desc}
                        icon={tech.icon}
                        isOpen={openTechIndex === index}
                        onToggle={() =>
                          setOpenTechIndex(openTechIndex === index ? null : index)
                        }
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* BUTTON TO SOFT SKILLS */}
          <div className="to-soft-skills-button">
            <LinkButton to="/skills/softskills" arrow="left">Soft Skills</LinkButton>
          </div>

        </div>
      </div>
    </section>
  );
}
