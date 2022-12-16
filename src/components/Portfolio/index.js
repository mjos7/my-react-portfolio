import React from 'react';

function Portfolio() {
  return (
    <section id="my-work" className="work section">
      <h2 className="section-title">
        My <span>Work</span>
      </h2>
      <div className="flex-container">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://mjos7.github.io/adventure-time"
          id="work-1"
          className="my-work"
        >
          <h3>Adventure Time</h3>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://alexandra-mcking-shop.herokuapp.com/"
          id="work-2"
          className="my-work"
        >
          <h3>Alexandra McKING</h3>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://morning-woodland-90591.herokuapp.com/"
          id="work-3"
          className="my-work"
        >
          <h3>
            Pet Beauty
            <br />
            Pageant
          </h3>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://mjos7.github.io/run-buddy/"
          id="work-4"
          className="my-work"
        >
          <h3>
            Run
            <br />
            Buddy
          </h3>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
