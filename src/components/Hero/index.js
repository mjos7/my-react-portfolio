import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-statement">
        <h2>
          <span id="hello">Hello, I'm</span> <br />
          <span id="hero-name">Mark Joseph</span>
          <br />
          <span className="neon-gradient">
            I am a <br />
            full stack
            <br />
            web developer.
          </span>
        </h2>

        <a href="#connect" className="button button-hover">
          Let's connect
        </a>
      </div>
      <div id="mark-profile"></div>
    </section>
  );
}

export default Hero;