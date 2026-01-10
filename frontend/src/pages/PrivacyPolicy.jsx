import { Link } from "react-router-dom";
import "./LegalPage.css";

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="legal__container">
        <header className="legal__header">
          <h1 className="legal__title">Privacy Policy</h1>
          <p className="legal__subtitle">
            Last updated: January 9, 2026
          </p>
        </header>

        <div className="legal__content">
          <section className="legal__section">
            <h2 className="legal__section-title">1. Information We Collect</h2>
            <p><strong>No Personal Data Collection:</strong> SahayaKISSAN Research does not collect personal information from visitors.</p>
            <p><strong>Technical Data:</strong> We may collect non-personal data like browser type, IP address, and pages visited for analytics purposes.</p>
          </section>

          <section className="legal__section">
            <h2 className="legal__section-title">2. Cookies</h2>
            <p>
              This website uses essential cookies for functionality and analytics cookies to improve user experience. You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__section-title">3. Third-Party Services</h2>
            <p>
              We use third-party services (Google Analytics, hosting providers) that may collect data according to their privacy policies. We do not share personal data with third parties.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__section-title">4. Data Security</h2>
            <p>
              We implement reasonable security measures to protect any data we process. However, no internet transmission is 100% secure.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__section-title">5. Children's Privacy</h2>
            <p>
              Our Platform is not intended for children under 13. We do not knowingly collect data from children.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__section-title">6. Changes to Policy</h2>
            <p>
              We may update this Privacy Policy. Changes will be posted here with the updated date. Continued use constitutes acceptance.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__section-title">7. Contact Us</h2>
            <p>
              For privacy concerns, contact: <br />
              <a href="mailto:privacy@sahayakissan.com" className="legal__email">privacy@sahayakissan.com</a>
            </p>
          </section>

          <div className="legal__actions">
            <Link to="/" className="legal__back-btn">← Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
