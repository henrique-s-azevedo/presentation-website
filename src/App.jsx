import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout.jsx";
import HomePage from "./Pages/Home/HomePage.jsx";
import AboutPage from "./Pages/About/AboutPage.jsx";
import ProjectsPage from "./Pages/Projects/ProjectsPage.jsx";
import PathPage from "./Pages/Path/PathPage.jsx";
import ContactPage from "./Pages/Contact/ContactPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Layout> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/path" element={<PathPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}