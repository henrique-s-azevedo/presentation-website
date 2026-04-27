import React from "react";
import "./PresentationBottomPage.css";
import { Link } from "react-router-dom";

// Icons
import { FaJava, FaReact, FaJs, FaDatabase, FaRobot, FaComments, FaBrain, FaTasks } from "react-icons/fa";

export default function PresentationBottomPage() {
  return (
    <section className="presentation-bottom-page">
      <div className="presentation-container">
        
        <h1 className="presentation-title">Short Presentation</h1>

        <p className="presentation-paragraph">My name is Henrique, I’m 30 years old, and I’ve spent more than a decade working closely with clients and teams in the fitness industry, a field that taught me how to communicate clearly, lead with intention, and stay focused on real outcomes. I’ve always been the kind of person who listens first, understands the true objective behind what people say, and then acts with purpose. That mindset naturally evolved into my journey into programming, where problem solving, structure, and continuous learning became the next step in my professional growth.</p>

        <p className="presentation-paragraph">This page is for those who want a quick overview of my profile without exploring the full presentation website. Here are the essentials that show how I could be a good fit for your team.</p>

        {/* ---------------- TECHNICAL BACKGROUND ---------------- */}
        <h3 className="presentation-subtitle">Technical Background</h3>

        <div className="tech-icons">
          <FaJava />
          <FaJs />
          <FaReact />
          <FaDatabase />
          <FaTasks />
          <FaRobot />
        </div>

        <p className="presentation-paragraph">Regarding my technical background, I completed the Code for All full‑stack bootcamp, where I worked daily with:</p>

        <ul className="presentation-list">
          <li>Java as the main programming language</li>
          <li>MVC architecture, understanding how data flows between database → backend → frontend</li>
          <li>REST APIs, WebSockets, and client–server communication</li>
          <li>Relational and non‑relational databases</li>
          <li>Application structure, routing, controllers, and models</li>
          <li>Clean code principles and modular development</li>
        </ul>

        <p className="presentation-paragraph">Alongside the bootcamp, I dedicated myself to independent study, where I learned:</p>

        <ul className="presentation-list">
          <li>React, which I used to build this presentation website</li>
          <li>JavaScript (ES6+)</li>
          <li>Component‑based development, state management, and modern UI patterns</li>
        </ul>

        <p className="presentation-paragraph">The projects I’ve built are showcased in my portfolio, and I will continue to expand it as I refine my skills and develop more technically challenging work. In terms of AI, my experience so far has been mainly with GitHub Copilot, and I am now beginning a more structured course to understand how to use AI tools more effectively in development workflows.</p>

        {/* ---------------- HUMAN SKILLS ---------------- */}
        <h3 className="presentation-subtitle">Human Skills & Professional Strengths</h3>

        <div className="tech-icons">
          <FaComments />
          <FaTasks />
          <FaBrain />
        </div>

        <p className="presentation-paragraph">My previous career gave me a set of soft skills that I consider essential in any team environment, and I can say I excel at:</p>

        <ul className="presentation-list">
          <li>Clear communication, both with colleagues and clients</li>
          <li>Understanding the real objective behind a request, not just the surface‑level need</li>
          <li>Leading conversations and guiding decisions when necessary</li>
          <li>A results‑oriented mindset, with experience solving daily challenges and thinking creatively when needed</li>
          <li>Continuous learning, proactivity, and strong work ethic</li>
          <li>The ability to listen, absorb knowledge, and apply feedback from more experienced professionals</li>
        </ul>

        <p className="presentation-paragraph">These qualities, along with others I describe in more detail in the <Link to="/skills/softskills" className="presentation-link">Soft Skills</Link> section of my website, help me adapt quickly, collaborate effectively, and contribute positively to team dynamics.</p>

        {/* ---------------- SHORT TERM GOALS ---------------- */}
        <h3 className="presentation-subtitle">Short‑Term Goals</h3>

        <p className="presentation-paragraph">As for my short‑term goals, my next step is to join a company as a Junior Developer — ideally one that values growth, mentorship, and long‑term development. If your company invests in its people and believes in helping juniors evolve, then I’m a strong fit for you. My commitment is to meet expectations, grow consistently, and become a reliable and valuable member of the team.</p>

        <p className="presentation-paragraph">On a personal level, I’m currently starting a focused Udemy course on advanced Copilot usage, after one of my HR students mentioned that this is the future and one of the skills companies will increasingly look for. I’m improving my understanding of AI‑assisted development, strengthening the languages and tools I already know, and learning new architectures and workflows commonly used in modern software development.</p>

        <p className="presentation-paragraph">I still have a lot to learn, and that’s exactly what motivates me every day. My goal is simply to become better, step by step, and to contribute meaningfully wherever I work.</p>

        {/* ---------------- CONTACT BUTTONS ---------------- */}
        <div className="contact-buttons">
          <a href="https://wa.me/351914522322" target="_blank" rel="noreferrer" className="contact-btn">Call me</a>
          <a href="mailto:henriqueazevedo.dev@gmail.com" className="contact-btn">Email me</a>
          <Link to="/about" className="contact-btn">Explore my website</Link>
        </div>

      </div>
    </section>
  );
}
