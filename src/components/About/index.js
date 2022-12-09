import React from 'react';

function About() {
  return (
    <section id="about-me" className="about section">
      <article className="profile">
        <h2 className="section-title">
          About <span> Me</span>
        </h2>

        <p>
          Hi, I'm Mark. I'm passionate about delivering impactful user
          experiences that make people's lives more productive and enjoyable.
          With a background in product management and marketing, I bring a
          unique perspective to the way things are built — always using empathy
          and data as my guides. <br />
          <br />
          I have over 13 years of experience in tech and graduated with an MBA
          from George Fox University in Portland, OR.
          <br />
          <br />
          I am an intrinsically motivated individual and a sponge when it comes
          to learning. I'm motivated by solving complex problems, building
          connections, and making a meaningful impact in the lives of others.
          <br />
          <br />
        </p>
      </article>
      <article className="skills">
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>

        <ul>
          <li>JavaScript ES6+</li>
          <li>CSS3</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>GraphQL APIs</li>
          <li>REST APIs</li>
          <li>Handlebars.js</li>
          <li>MySQL / Sequelize</li>
          <li>MongoDB / Mongoose</li>
          <li>Object Oriented Programming (OOP)</li>
          <li>JWT User Auth (JSON Web Token)</li>
          <li>Jest (TDD)</li>
          <li>Git / GitHub</li>
          <li>Product management / Agile</li>
        </ul>
      </article>
    </section>
  );
}

export default About;
