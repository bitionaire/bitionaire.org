import * as React from 'react';
import './Footer.css';

const Logo = (path: string) => {
  let content = require(`./assets/${path}.svg`);
  return (
    <img
      className="footer__contact-brand-logo"
      src={content}
    />
  );
};

const Footer: React.SFC = () => (
  <footer className="footer">

    <h1 className="footer__name">Johann Böhler</h1>
    <a href="mailto:info@bitionaire.org" className="footer__mail">info@bitionaire.org</a>

    <ul className="footer__contact-list">
      <li className="footer__contact-list-item">
        <a href="https://twitter.com/thebitionaire" target="_blank" className="footer__brand-link">
          {Logo('twitter')}
          <span className="footer__contact-brand-name">Twitter</span>
        </a>
      </li>
      <li className="footer__contact-list-item">
        <a href="https://github.com/bitionaire" target="_blank" className="footer__brand-link">
          {Logo('github')}
          <span className="footer__contact-brand-name">GitHub</span>
        </a>
      </li>
      <li className="footer__contact-list-item">
        <a href="https://de.linkedin.com/in/johann-b%C3%B6hler-279191a3" target="_blank" className="footer__brand-link">
          {Logo('linkedin')}
          <span className="footer__contact-brand-name">LinkedIn</span>
        </a>
      </li>
    </ul>

  </footer>
);

export default Footer;