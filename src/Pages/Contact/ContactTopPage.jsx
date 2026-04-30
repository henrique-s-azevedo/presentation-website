import GenericSectionPage from "../../components/TopPageComponents/GenericSectionPage/GenericSectionPage.jsx";
import "./ContactTopPage.css";

import MediaButton from "../../components/Button/MediaButton/MediaButton.jsx";

import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiGooglecalendar } from "react-icons/si";
import { useState } from "react";

export default function ContactTopPage({ onScrollNext }) {

  const [sent, setSent] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();t
  setSent(true);

  e.target.submit();

  setTimeout(() => {
    window.location.reload();
  }, 3000);
};

  return (
    <GenericSectionPage title="" onScrollNext={onScrollNext}>
      <div className="contact-container">

        {/* FORM */}
        <form
          className="contact-form"
          action="https://formsubmit.co/henriqueazevedo.dev@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />

          <h2 className="form-title">Give me a feedback</h2>

          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>

          <label>
            Email
            <input type="email" name="email" placeholder="Your email" required />
          </label>

          <label>
            Message
            <textarea
              name="message"
              placeholder="I genuinely welcome your feedback. It helps me grow and guides my work as I continue pursuing a developer role."
              required
            />
          </label>

          <button type="submit" className="contact-submit">
            Send Message
          </button>

          {sent && (
            <p className="success-message">
              Message sent successfully! Refreshing...
            </p>
          )}
        </form>

        {/* CONTACT ICONS */}
        <div className="contact-info">
          <h3>Contacts</h3>

          <p>
            If you believe I could be a good fit for your junior developer position or would like to schedule an interview to get to know me better, feel free to reach out through whichever way suits you best.
          </p>

          <div className="contact-icons">

            <MediaButton
              href="mailto:henriqueazevedo.dev@gmail.com"
              ariaLabel="Email"
            >
              <MdEmail />
            </MediaButton>

            <MediaButton
              href="https://wa.me/351914522322"
              ariaLabel="WhatsApp"
            >
              <FaWhatsapp />
            </MediaButton>

            <MediaButton
              href="https://www.linkedin.com/in/henrique-azevedo-9615222b3/"
              ariaLabel="LinkedIn"
            >
              <FaLinkedin />
            </MediaButton>

          </div>

          <p className="bigger-p">Thank you!</p>
        </div>

      </div>
    </GenericSectionPage>
  );
}
