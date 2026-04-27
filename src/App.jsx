import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop.jsx";

import Header from "./components/Header/Header.jsx";

import HomeTopPage from "./Pages/Home/HomeTopPage.jsx";

import AboutTopPage from "./Pages/About/AboutTopPage/AboutTopPage.jsx";
import AboutMyStoryPage from "./Pages/About/AboutBottomPage/AboutMyStory/AboutMyStory.jsx";
import AboutMyProgrammingPathPage from "./Pages/About/AboutBottomPage/AboutMyProgrammingPath/AboutMyProgrammingPath.jsx";
import AboutWhatAmILookingForPage from "./Pages/About/AboutBottomPage/AboutWhatAmILookingFor/AboutWhatAmILookingForPage.jsx";

import ProjectsTopPage from "./Pages/Projects/ProjectsTopPage.jsx";
import PresentationWebsite from "./Pages/Projects/ProjectsBottomPage/PresentationWebsite.jsx";
import TeamSafetyMonitor from "./Pages/Projects/ProjectsBottomPage/TeamSafetyMonitor.jsx";
import TeamCarDealer from "./Pages/Projects/ProjectsBottomPage/TeamCarDealer.jsx";


import ContactTopPage from "./Pages/Contact/ContactTopPage.jsx";

import SkillsTopPage from "./Pages/Skills/SkillsTopPage/SkillsTopPage.jsx";
import SoftSkillsPage from "./Pages/Skills/SkillsBottomPage/SoftSkills/SoftSkillsPage.jsx";
import HardSkillsPage from "./Pages/Skills/SkillsBottomPage/HardSkills/HardSkillsPage.jsx";

import PresentationBottomPage from "./Pages/Presentation/PresentationBottomPage.jsx";


export default function App() {
  return (
    <BrowserRouter>

      {/* Scroll to top on every route change */}
      <ScrollToTop />

      <Header />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<HomeTopPage />} />

        {/* ABOUT */}
        <Route path="/about" element={<AboutTopPage />} />
        <Route path="/about/story" element={<AboutMyStoryPage />} />
        <Route path="/about/programming" element={<AboutMyProgrammingPathPage />} />
        <Route path="/about/lookingfor" element={<AboutWhatAmILookingForPage />} />

        {/* PROJECTS */}
        <Route path="/projects" element={<ProjectsTopPage />} />
        <Route path="/projects/presentationwebsite" element={<PresentationWebsite />} />
        <Route path="/projects/teamsafetymonitor" element={<TeamSafetyMonitor />} />
        <Route path="/projects/teamcardealer" element={<TeamCarDealer />} />


        {/* CONTACT */}
        <Route path="/contact" element={<ContactTopPage />} />

        {/* SKILLS */}
        <Route path="/skills" element={<SkillsTopPage />} />
        <Route path="/skills/softskills" element={<SoftSkillsPage />} />
        <Route path="/skills/hardskills" element={<HardSkillsPage />} />

        {/* PRESENTATION */}
        <Route path="/presentation" element={<PresentationBottomPage />} />

      </Routes>

    </BrowserRouter>
  );
}
