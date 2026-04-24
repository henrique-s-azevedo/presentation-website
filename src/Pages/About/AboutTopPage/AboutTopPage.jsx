import GenericSectionPage from "../../../components/TopPageComponents/GenericSectionPage/GenericSectionPage.jsx";
import ImageLinkCard from "../../../components/Button/ImageLinkCard/ImageLinkCard.jsx";

import aboutMeBackgroud from "../../../assets/images/about-page/top-page/about-me.png";
import programmingPathBackground from "../../../assets/images/about-page/top-page/programming-path.png";
import myObjectiveBackground from "../../../assets/images/about-page/top-page/my-objective.png";

export default function AboutTopPage({ onScrollNext }) {
  return (
    <GenericSectionPage
      title="About Me"
      subtitle="Get to know a little bit of my backgorund, professional experience and type of workers I am. What made me strart transitioning from the sports and health branch to the IT developer world and intentions for in the future as well."
      onScrollNext={onScrollNext}
    >
      <div className="generic-grid">
        <ImageLinkCard
          to="/about/story"
          image={aboutMeBackgroud}
          label="Who am I and what I currently do"
        />

        <ImageLinkCard
          to="/about/programming"
          image={programmingPathBackground}
          label="An overview of the programming path I've taken until now"
        />

        <ImageLinkCard
          to="/about/lookingfor"
          image={myObjectiveBackground}
          label="What am I looking for in the future, my short and long term goals in software development"
        />
      </div>
    </GenericSectionPage>
  );
}