import GenericSectionPage from "../../components/TopPageComponents/GenericSectionPage/GenericSectionPage.jsx";
import "./ContactTopPage.css";

import MediaButton from "../../components/Button/MediaButton/MediaButton.jsx";

import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiGooglecalendar } from "react-icons/si";

export default function ContactTopPage({ onScrollNext }) {
  return (
    <GenericSectionPage
      title=""
      onScrollNext={onScrollNext}
    >
      <div className="contact-container">

        {/* FORM */}
        <form className="contact-form">
          <h2 className="form-title">Give me a feedback</h2>

          <label>
            Name
            <input type="text" placeholder="Your name" required />
          </label>

          <label>
            Email
            <input type="email" placeholder="Your email" required />
          </label>

          <label>
            Message
            <textarea placeholder="I genuinely welcome your feedback. It helps me grow and guides my work as I continue pursuing a developer role." required />
          </label>

          <button type="submit" className="contact-submit">
            Send Message
          </button>
        </form>

        {/* CONTACT ICONS */}
        <div className="contact-info">
          <h3>Contacts</h3>

          <p>If you believe I could be a good fit for your junior developer position or would like to schedule an interview to get to know me better, feel free to reach out through whichever way suits you best.</p>  

          <div className="contact-icons">

            <MediaButton
              href="mailto:your-email@example.com"
              ariaLabel="Email"
            >
              <MdEmail />
            </MediaButton>

            <MediaButton
              href="https://wa.me/351XXXXXXXXX"
              ariaLabel="WhatsApp"
            >
              <FaWhatsapp />
            </MediaButton>

            <MediaButton
              href="https://www.linkedin.com/in/teu-perfil"
              ariaLabel="LinkedIn"
            >
              <FaLinkedin />
            </MediaButton>

            <MediaButton
              href="https://calendar.google.com/"
              ariaLabel="Google Calendar"
            >
              <SiGooglecalendar />
            </MediaButton>
          </div>
          
          <p class="bigger-p">Thank you!</p>
        </div>

      </div>
    </GenericSectionPage>
  );
}
