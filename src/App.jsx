import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";

import HomeTopPage from "./Pages/Home/HomeTopPage.jsx";
import HomeBottomPage from "./Pages/Home/HomeBottomPage.jsx";

import AboutTopPage from "./Pages/About/AboutTopPage.jsx";
import AboutBottomPage from "./Pages/About/AboutBottomPage.jsx";

import ProjectsTopPage from "./Pages/Projects/ProjectsTopPage.jsx";
import ProjectsBottomPage from "./Pages/Projects/ProjectsBottomPage.jsx";

import ContactTopPage from "./Pages/Contact/ContactTopPage.jsx";

import PathTopPage from "./Pages/Path/PathTopPage.jsx";
import PathBottomPage from "./Pages/Path/PathBottomPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<HomeTopPage />} />
        <Route path="/home" element={<HomeBottomPage />} />

        {/* ABOUT */}
        <Route path="/about" element={<AboutTopPage />} />
        <Route path="/about/content" element={<AboutBottomPage />} />

        {/* PROJECTS */}
        <Route path="/projects" element={<ProjectsTopPage />} />
        <Route path="/projects/content" element={<ProjectsBottomPage />} />

        {/* CONTACT */}
        <Route path="/contact" element={<ContactTopPage />} />

        {/* PATH */}
        <Route path="/path" element={<PathTopPage />} />
        <Route path="/path/content" element={<PathBottomPage />} />
      </Routes>
    </BrowserRouter>
  );
}