// IMPORTS AUTOMÁTICOS DAS 9 IMAGENS DESKTOP
import img1d from "../../assets/images/home-page/bottom-page/carrossel-img/desktop-carrossel/contact-me-desktop.png";
import img2d from "../../assets/images/home-page/bottom-page/carrossel-img/desktop-carrossel/give-me-feedback-desktop.png";
import img3d from "../../assets/images/home-page/bottom-page/carrossel-img/desktop-carrossel/my-programming-path-desktop.png";
import img4d from "../../assets/images/home-page/bottom-page/carrossel-img/desktop-carrossel/my-soft-skills-desktop.png";
import img5d from "../../assets/images/home-page/bottom-page/carrossel-img/desktop-carrossel/my-story-desktop.png";
import img6d from "../../assets/images/home-page/bottom-page/carrossel-img/desktop-carrossel/my-technical-skills-desktop.png";
import img7d from "../../assets/images/home-page/bottom-page/carrossel-img/desktop-carrossel/team-safety-monitor-desktop.png";
import img8d from "../../assets/images/home-page/bottom-page/carrossel-img/desktop-carrossel/what-am-i-looking-for-desktop.png";
import img9d from "../../assets/images/home-page/bottom-page/carrossel-img/desktop-carrossel/presentation-website-desktop.png";

// IMPORTS AUTOMÁTICOS DAS 9 IMAGENS MOBILE
import img1m from "../../assets/images/home-page/bottom-page/carrossel-img/mobile-carrossel/contact-me-mobile.png";
import img2m from "../../assets/images/home-page/bottom-page/carrossel-img/mobile-carrossel/give-me-feedback-mobile.png";
import img3m from "../../assets/images/home-page/bottom-page/carrossel-img/mobile-carrossel/my-programming-path-mobile.png";
import img4m from "../../assets/images/home-page/bottom-page/carrossel-img/mobile-carrossel/my-soft-skills-mobile.png";
import img5m from "../../assets/images/home-page/bottom-page/carrossel-img/mobile-carrossel/my-story-mobile.png";
import img6m from "../../assets/images/home-page/bottom-page/carrossel-img/mobile-carrossel/my-technical-skills-mobile.png";
import img7m from "../../assets/images/home-page/bottom-page/carrossel-img/mobile-carrossel/team-safety-monitor-mobile.png";
import img8m from "../../assets/images/home-page/bottom-page/carrossel-img/mobile-carrossel/what-am-i-looking-for-mobile.png";
import img9m from "../../assets/images/home-page/bottom-page/carrossel-img/mobile-carrossel/presentation-website-mobile.png";

// ESTRUTURA DE DADOS UNIFICADA
const carouselItems = [
  {
    base: "contact-me",
    desktop: img1d,
    mobile: img1m,
    title: "Contact Me",
    description: "Reach out directly through my contact page.",
    route: "/contact"
  },
  {
    base: "give-me-feedback",
    desktop: img2d,
    mobile: img2m,
    title: "Give Me Feedback",
    description: "Share your thoughts and help me improve.",
    route: "/contact"
  },
  {
    base: "my-programming-path",
    desktop: img3d,
    mobile: img3m,
    title: "My Programming Path",
    description: "A timeline of my journey into development.",
    route: "/about/programming"
  },
  {
    base: "my-soft-skills",
    desktop: img4d,
    mobile: img4m,
    title: "My Soft Skills",
    description: "Communication, teamwork, leadership and more.",
    route: "/skills/softskills"
  },
  {
    base: "my-story",
    desktop: img5d,
    mobile: img5m,
    title: "My Story",
    description: "Where I come from and what drives me.",
    route: "/about/story"
  },
  {
    base: "my-technical-skills",
    desktop: img6d,
    mobile: img6m,
    title: "My Technical Skills",
    description: "Technologies, tools and frameworks I use.",
    route: "/skills/hardskills"
  },
  {
    base: "team-safety-monitor",
    desktop: img7d,
    mobile: img7m,
    title: "Team Safety Monitor",
    description: "A project focused on workplace safety.",
    route: "/projects/teamsafetymonitor"
  },
  {
    base: "what-am-i-looking-for",
    desktop: img8d,
    mobile: img8m,
    title: "What Am I Looking For",
    description: "My goals and what I seek in a company.",
    route: "/about/lookingfor"
  },
  {
    base: "presentation-website",
    desktop: img9d,
    mobile: img9m,
    title: "Presentation Website",
    description: "A clean and modern portfolio website.",
    route: "/projects/presentationwebsite"
  }
];

export const desktopImages = carouselItems.map(item => ({
  image: item.desktop,
  meta: { title: item.title, description: item.description },
  route: item.route
}));

export const mobileImages = carouselItems.map(item => ({
  image: item.mobile,
  base: item.base,
  title: item.title,
  route: item.route
}));

// ROTAS DINÂMICAS
export const carouselRoutes = carouselItems.reduce((acc, item) => {
  acc[item.base] = item.route;
  return acc;
}, {});

// META PARA PROJECTCARD (TÍTULO + DESCRIÇÃO)
export const carouselMeta = carouselItems.reduce((acc, item) => {
  acc[item.base] = { title: item.title, description: item.description };
  return acc;
}, {});

// HELPERS
export const formatTitle = (base) =>
  base.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
