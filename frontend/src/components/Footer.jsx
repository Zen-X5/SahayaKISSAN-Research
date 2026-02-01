import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const teamMembers = [
    {
      name: "Sahid Ahmed",
      role: "Backend Developer & IoT Engineer",
      linkedin: "sahid-ahmed-428726329",
    },
    {
      name: "Moumita Baishya",
      role: " Frontend Developer & Backend (API)\nHandler",
      linkedin: "moumita-baishya-613a0b327",
    },
    {
      name: "Aryan Choudhury",
      role: " UI/UX Designer\n& IoT Engineer",
      linkedin: "aryan-choudhury-37a5b937a",
    },
    {
      name: "Rajdeep Mudiar",
      role: " IoT Engineer & AI/ML Specialist",
      linkedin: "rajdeep-mudiar-795ba91b6",
    },
    {
      name: "Amlandwip Das",
      role: " Frontend Developer & Backend (API)\nHandler",
      linkedin: "amlandwip-das-435555240",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__section">
          <div className="footer__brand">
            <h3 className="footer__logo">🌱 SahayaKISSAN Research</h3>
            <p className="footer__tagline">
              Empowering Indian farmers with precision agriculture research and
              technology
            </p>
          </div>
        </div>

        <div className="footer__section">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__links">
            <li>
              <Link to="/" className="footer__link">
                Home
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__heading">Team</h4>
          <div className="footer__team">
            {teamMembers.map((member, index) => (
              <div key={index} className="footer__member">
                <div className="footer__member-info">
                  <span className="footer__member-name">{member.name}</span>
                  <span className="footer__member-role">{member.role}</span>
                  {member.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${member.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__member-linkedin"
                    >
                      LinkedIn Profile ↗
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
            © {currentYear} SahayaKISSAN Research. Revolutionizing agriculture
            through research & innovation. All rights reserved. | Made with ❤️
            in Assam, India
          </p>
          <div className="footer__bottom-links">
            <Link to="/privacy" className="footer__bottom-link">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/terms" className="footer__bottom-link">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
