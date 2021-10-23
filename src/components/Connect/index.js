import React from 'react';

function Connect() {
  return (
    <section id="connect" className="section connect">
      <h2 className="section-title">
        Let's <span>Connect</span>
      </h2>
      <p>
        View my work on GitHub, connect with me on LinkedIn or shoot me a note
        via Email.
      </p>
      <div className="flex-container">
        <a
          className="connect-item button-hover"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/markjnjoseph/"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          className="connect-item button-hover"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/mjos7"
        >
          <i className="fab fa-github-alt"></i>
        </a>
        <a
          className="connect-item button-hover"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:markjnjoseph@gmail.com"
        >
          <i className="far fa-envelope"></i>
        </a>
        <a className="connect-item button-hover" href="/">
          <i className="fas fa-user-circle"></i>
        </a>
      </div>
    </section>
  );
}

export default Connect;
