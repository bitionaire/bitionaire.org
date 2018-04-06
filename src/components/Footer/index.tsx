import * as React from 'react';
import './Footer.css';

const Logo = (path: string) => {
  let content = require(`!svg-inline-loader!./assets/${path}.svg`);
  return (
    <span
      className="footer__contact-brand-logo"
      dangerouslySetInnerHTML={{__html: content}}
    />
  );
};

const Footer: React.SFC = () => (
  <footer className="footer">

    <h1>Johann Böhler</h1>
    <a href="mailto:info@bitionaire.org">info@bitionaire.org</a>

    <ul className="footer__contact-list">
      <li className="footer__contact-list-item">
        <a href="twitter" target="_blank" className="footer__brand-link">
          {Logo('twitter')}
          <span className="footer__contact-brand-name">Twitter</span>
        </a>
      </li>
      <li className="footer__contact-list-item">
        <a href="github" target="_blank" className="footer__brand-link">
          {Logo('github')}
          <span className="footer__contact-brand-name">GitHub</span>
        </a>
      </li>
      <li className="footer__contact-list-item">
        <a href="linkedin" target="_blank" className="footer__brand-link">
          {Logo('linkedin')}
          <span className="footer__contact-brand-name">LinkedIn</span>
        </a>
      </li>
    </ul>

  </footer>
);

export default Footer;