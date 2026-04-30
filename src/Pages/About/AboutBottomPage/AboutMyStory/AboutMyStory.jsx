import GenericAboutPage from "../../../../components/TopPageComponents/AboutPageComponents/GenericAboutPage/GenericAboutPage.jsx";
import LinkButton from "../../../../components/Button/LinkButton/LinkButton.jsx";

import image1 from "../../../../assets/images/about-page/bottom-page/my-story/image1.png";
import image2 from "../../../../assets/images/about-page/bottom-page/my-story/image2.png";

import "./AboutMyStory.css";

export default function AboutMyStory() {
  return (
    <GenericAboutPage title="My Story">
      
      <p>My name is <span className="bold">Henrique Azevedo</span>, I’m 34 years old, and I’ve been working in the <span className="bold"> fitness industry</span> for more than ten years. I started as a personal trainer and gym instructor, later evolved into teaching group classes, and eventually reached a point where I also became involved in project and operations management where I help manage client interactions, user attendance, the overall quality of the training experience and feedback as well as team performance. </p> 
      
      <p>All to support the company’s KPIs and client retention, ensuring a better service and, ultimately, better results for the business.</p>

      <p>Even though I’m now transitioning into a new field, I can genuinely say that I’ve always enjoyed my work, valuing the human side of the job, the daily <span className="bold">connection with people</span>, the <span className="bold">energy of physical activity</span>, and the <span className="bold">satisfaction of helping someone feel better about themselves</span>.
      </p>

      <p>I also appreciated the more strategic aspects of the role, such as <span className="bold">sales</span>, <span className="bold">coordination</span>, and <span className="bold">teamwork</span>, where communication, organization, and collaboration all come together.</p>

      <p>These elements made my work meaningful and helped shaped myself into a <span className="bold">reliable</span>, <span className="bold">proactive</span>, and <span className="bold"> team‑oriented professional</span>. I’m the kind of worker who genuinely “puts on the jersey”, someone who shows up, supports the team, and does whatever he can to keep things running smoothly.</p>
      
      <p>I’m always willing to <span className="bold">help solve problems or handle unexpected situations</span>, whether they affect me directly or not. I try to follow the company’s direction, and whenever I have more experience in a specific area, I contribute with ways to improve processes and outcomes.</p>

      <p>At the same time, I know when it’s my turn to <span className="bold">listen</span>, <span className="bold">learn</span>, and <span className="bold"> follows the rules</span> of a well design plan of action. That balance between taking initiative and staying teachable has been one of the most important parts of my growth as a professional.</p>

      <div className="about-row left two-rows">
        <img src={image1} alt="Tematic fun class" className="about-image-1" />

        <div className="about-text-block">
          <p>As a <span className="bold">coworker</span>, instructor, and person in general, I like to think that I’m <span className="bold"> helpful</span>, <span className="bold">friendly</span>, <span className="bold">good to be around</span>, <span className="bold"> fun</span> and <span className="bold">cooperative</span>. You can always find me trying to bring a good atmosphere to the people around me, a little bit of joy, positivity and good energy to everyone’s day.</p>

          <p>Although individual effort matters, <span className="bold">I mainly believe teamwork goes further</span>. Sharing knowledge and ideas, learning from each other’s strengths, and cooperating toward a common goal creates a dynamic where everyone improves and the final outcome is always stronger than what any of us could achieve alone.</p>
        </div>
      </div>

      <p>Talking a little bit more about what brought me to here...</p>

      <p>Throughout these years, and across different gyms and work environments, I’ve learned much more than training methodologies. My academic background in Sports Science (FADUP) gave me a strong foundation in human performance, discipline, consistency, and structured learning. But I still believe that day‑to‑day work is what truly shapes the most valuable skills, the ones that translate to any professional field.</p>

      <p>If you are interested in checking all my fitness backgroung, <span className="bold">you download my CV below:</span></p>

      <div className="cv-button-wrapper">
        <a  
        href={`${import.meta.env.BASE_URL}assets/cv/Henrique-Azevedo-Fitness-CV.pdf`}
        download="Henrique-Azevedo-Fitness-CV.pdf" 
        className="resume-download cv-button">
          Download Fitness CV
          </a>
      </div>

    <p>
      Working closely with people every day taught me how to <span className="bold">communicate clearly and effectively</span>, how to <span className="bold">adapt to different personalities</span>, how to <span className="bold">lead</span> when necessary, how to <span className="bold">motivate</span> others, and how to guide someone through a <span className="bold">long‑term process</span>, to operate in very different environments, adapting to the culture, expectations, and workflow of each gym I worked in, developing <span className="bold">adaptability</span>, <span className="bold">teachability</span>, and the ability to <span className="bold">perform well regardless</span> of the context or challenges.
    </p>

    <p>
      It also taught me something fundamental: <span className="bold"> progress happens through small, consistent steps.</span> That mindset became a core part of who I am.
    </p>


      <div className="about-row">
        <p>Teaching group classes, in particular, brought a unique set of soft skills: it forced me to be <span className="bold"> flexible</span>, to read the room quickly, and to <span className="bold">adjust the intensity, energy, and communication style</span> depending on the people in front of me. <br /> It trained my ability to <span className="bold"> think fast</span>, <span className="bold">manage pressure</span>, and <span className="bold"> stay confident</span> even in the toughest situations. And with the constant rotation of choreographies and class formats, I had to learn new material quickly and deliver it with clarity and confidence, a great exercise in <span className="bold">fast learning</span>, <span className="bold">memory</span>, and <span className="bold">performance under time constraints</span>.</p>

        <img src={image2} alt="Teaching a BodyPump class" className="about-image-2" />
      </div>

      <h3>Where am I now?</h3>

      <p>Currently, I’m working in what I consider the best job I’ve had so far. But even though the team is great and the environment is genuinely good, I’ve reached a ceiling. I want to keep growing, not only financially, but also intellectually and in the time I can dedicate to my family, and none of these three goals are realistically achievable in my current position.</p>

      <p>On top of that, the physical demands of the job also played a role in my decision. Teaching four classes a day is something I can handle now, but it’s not a sustainable routine in the long run. I couldn’t picture myself maintaining that level of physical effort at fifty years old, and I know that continuing on the same path would eventually take a toll on my health and quality of life.</p>

      <p>With all of this in mind, and considering that I’ve always had a <span className="bold"> natural curiosity for solving problems, making things work, and creating solutions</span>, I gradually started exploring programming more seriously.</p> 
      
      <p>As I learned more and began experimenting with code, I realized how much I enjoyed the process. The influence of friends and students who work in tech also played a role, encouraging me to look deeper into software engineering.</p>

      <p><span className="bold">And it was this is what ultimately sparked my transition into the tech world...</span></p>

      <div className="about-bottom-buttons about-my-story-bottom-buttons">
        <LinkButton to="/about/programming" arrow="right">My Programming Path</LinkButton>
      </div>

    </GenericAboutPage>
  );
}
