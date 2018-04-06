import * as React from 'react';
import './Footer.css';

const Footer: React.SFC = () => (
  <footer className="footer">

    <h1>Johann Böhler</h1>
    <a href="mailto:info@bitionaire.org">info@bitionaire.org</a>

    <ul className="footer__contact-list">
      <li className="footer__contact-list-item">
        <a href="twitter">
          <span>Twitter</span>
        </a>
      </li>
      <li className="footer__contact-list-item">
        <a href="github">
          <span>GitHub</span>
        </a>
      </li>
      <li className="footer__contact-list-item">
        <a href="linkedin">
          <span>LinkedIn</span>
        </a>
      </li>
    </ul>

  </footer>
);

export default Footer;