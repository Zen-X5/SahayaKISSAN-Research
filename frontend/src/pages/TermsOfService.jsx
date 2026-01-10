import { Link } from "react-router-dom";
import "./LegalPage.css";

export default function TermsOfService() {
  return (
    <div className="legal-page">
      <div className="legal__container">
        <header className="legal__header">
          <h1 className="legal__title">Terms of Service</h1>
          <p className="legal__subtitle">
            Last updated: January 9, 2026
          </p>
        </header>

        <div className="legal__content">
          <section className="legal__section">
            <h2 className="legal__section-title">1. Acceptance of Terms</h2>
            <p>
              By accessing and using SahayaKISSAN Research (the "Platform"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, please do not use the Platform.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__section-title">2. Services Description</h2>
            <p>
              SahayaKISSAN Research provides agricultural research information, project demonstrations, and educational resources for farmers and researchers. We do not provide personalized agricultural advice or consulting services.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__section-title">3. User Responsibilities</h2>
            <ul className="legal__list">
              <li>You must be 18 years or older to use the Platform</li>
              <li>You agree not to misuse the Platform or its content</li>
              <li>You will respect intellectual property rights of all content</li>
              <li>You will not use automated systems to scrape or extract data</li>
            </ul>
          </section>

          <section className="legal__section">
            <h2 className="legal__section-title">4. Intellectual Property</h2>
            <p>
              All content on SahayaKISSAN Research, including text, graphics, logos, and research data, is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without written permission.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__section-title">5. Disclaimers</h2>
            <p>
              <strong>NO AGRICULTURAL ADVICE:</strong> Information provided is for educational purposes only and should not be considered professional agricultural advice. Always consult qualified experts for farming decisions.
            </p>
            <p>
              SahayaKISSAN Research makes no warranties regarding crop yields, soil conditions, or farming outcomes based on Platform content.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__section-title">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, SahayaKISSAN Research shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from use of the Platform.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__section-title">7. Termination</h2>
            <p>
              We reserve the right to suspend or terminate access to the Platform at our sole discretion, without notice, for conduct that we believe violates these Terms.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__section-title">8. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes shall be resolved exclusively in the courts of Assam, India.
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
