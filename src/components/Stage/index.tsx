import * as React from 'react';
import './Stage.css';

const Stage: React.SFC = () => (
  <header className="stage">
    <div className="stage__portrait">
      <h1 className="stage__name">Johann Böhler</h1>
    </div>

    <section className="stage__content">
      <div className="stage__intro">
        <h1 className="stage__alias">bitionaire</h1>
        <ul className="stage__attributes">
          <li className="stage__attribute-header">Full Stack Developer.</li>
          <li className="stage__attribute-subheader">Design enthusiast.</li>
        </ul>
      </div>

      <nav style={{ display: 'none' }}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </nav>
    </section>
  </header>
);

export default Stage;