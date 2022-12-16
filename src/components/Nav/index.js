import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav() {
  return (
    <header>
      <h1>
        <a href="/my-react-portfolio/">My Portfolio</a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#about-me" className="underline">
              About Me
            </a>
          </li>
          <li>
            <a href="#my-work" className="underline">
              My Work
            </a>
          </li>
          <li>
            <a href="#connect" className="underline">
              Connect
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
