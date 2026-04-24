import GenericSectionPage from "../../../components/TopPageComponents/GenericSectionPage/GenericSectionPage.jsx";
import ImageLinkCard from "../../../components/Button/ImageLinkCard/ImageLinkCard.jsx";

import img1 from "../../../assets/images/skills-page/top-page/soft-skills.png";
import img2 from "../../../assets/images/skills-page/top-page/hard-skills.png";


export default function SkillsTopPage({ onScrollNext }) {
  return (
    <GenericSectionPage
      title="Skills"
      subtitle={
        <>
          I’ve organized my skillset into two groups:{" "} <strong>soft skills</strong> I’ve developed through life and work experience, and <strong>technical skills</strong> — technologies, architectures and languages I’ve learned and applied in my projects.
        </>
      }
      onScrollNext={onScrollNext}
    >
      <div className="generic-grid">
        <ImageLinkCard
          to="/skills/softskills"
          image={img1}
          label="SOFT SKILLS"
        />

        <ImageLinkCard
          to="/skills/hardskills"
          image={img2}
          label="TECHNICAL SKILLS"
        />
      </div>
    </GenericSectionPage>
  );
}