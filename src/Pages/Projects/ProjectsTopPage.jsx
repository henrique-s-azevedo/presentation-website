import GenericSectionPage from "../../components/TopPageComponents/GenericSectionPage/GenericSectionPage.jsx";
import ProjectsCarousel from "../../components/Carousel/ProjectsCarousel.jsx";

import presentationWebsiteImg from "../../assets/images/projects/top-pages/presentation-website.png";
import teamsafetymonitor from "../../assets/images/projects/top-pages/team-safety-monitor.png";
import cardealership from "../../assets/images/projects/top-pages/car-dealership.png";



export default function ProjectsTopPage() {
  return (
    <GenericSectionPage
      title="Projects"
      subtitle={
        <>
          Here are some of the main projects I’ve built so far.  
          Each one represents a different step in my learning journey and showcases
          the technologies and concepts I’ve been working with.  
          Feel free to explore them and check the source code or detailed pages.
        </>
      }
    >
      <ProjectsCarousel
        slides={[
          {
            image: teamsafetymonitor,
            title: "Team Safety Monitor",
            link: "/projects/teamsafetymonitor"
          },
          {
            image: presentationWebsiteImg,
            title: "Presentation Website",
            link: "/projects/presentationwebsite"
          },
          {
            image: cardealership,
            title: "Project 3",
            link: "/projects/teamcardealer"
          }
        ]}
      />
    </GenericSectionPage>
  );
}
