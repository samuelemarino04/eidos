import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">Eidos</div>
            <p className="footer-brand-description">
              Empowering teams to achieve more through innovative technology and
              exceptional user experience.
            </p>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="public/Privacy policy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="public/Cookie Policy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="mailto:eidosdesignagency@gmail.com"
                  className="footer-link"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Eidos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
