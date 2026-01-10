import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const teamMembers = [
    { name: "Sahid Ahmed", role: "Full-Stack Developer", linkedin: "abc" },
    { name: "Moumita Baishya", role: "UI/UX Designer", instagram: "abc" },
    { name: "Aryan Choudhury", role: "Agriculture Data Scientist", linkedin: "abc" },
    { name: "Rajdeep Mudiar", role: "Project Manager", linkedin: "abc" },
    { name: "Amlandwip Das", role: "Project Manager", linkedin: "abc" },
  ];

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__section">
          <div className="footer__brand">
            <h3 className="footer__logo">🌱 SahayaKISSAN Research</h3>
            <p className="footer__tagline">
              Empowering Indian farmers with precision agriculture research and technology
            </p>
          </div>
        </div>

        <div className="footer__section">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__links">
            <li><Link to="/" className="footer__link">Home</Link></li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__heading">Team</h4>
          <div className="footer__team">
            {teamMembers.map((member, index) => (
              <div key={index} className="footer__member">
                <div className="footer__member-info">
                  <span className="footer__member-name">{member.name}</span>
                </div>
                <div className="footer__member-social">
                  {member.linkedin && (
                    <a 
                      href={`https://linkedin.com/in/${member.linkedin}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="footer__social footer__linkedin"
                      aria-label={`LinkedIn ${member.name}`}
                    >
                      ↗
                    </a>
                  )}
                  {member.instagram && (
                    <a 
                      href={`https://instagram.com/${member.instagram}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="footer__social footer__instagram"
                      aria-label={`Instagram ${member.name}`}
                    >
                      📷
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__section">
          <h4 className="footer__heading">Contact</h4>
          <div className="footer__contact">
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📍</span>
              <span>Guwahati University,Guwahati, Assam, India</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">✉️</span>
              <span>sahidwork123@gmail.com</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📱</span>
              <span>+91 7099774852</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-content">
          <p>
            © {currentYear} SahayaKISSAN Research. 
            Revolutionizing agriculture through research & innovation. 
            All rights reserved. | Made with ❤️ in Assam, India
          </p>
          <div className="footer__bottom-links">
            <Link to="/privacy" className="footer__bottom-link">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="footer__bottom-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
