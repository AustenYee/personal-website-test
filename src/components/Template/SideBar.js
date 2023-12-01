import React from "react";
import { Link } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Austen Yee</h2>
        <p>
          <a href="mailto:austenyee@gmail.com">austenyee@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Austen Yee. I am a{" "}
        <a href="https://www.csus.edu/">
          {" "}
          California State University Sacramento{" "}
        </a>
        graduate. I am highly motivated and eager to embark on a career journey
        that allows me to apply the knowledge and skills I've acquired during my
        academic pursuits. I am enthusiastic about the opportunity to gain
        practical experience and contribute to a dynamic team. With a strong
        educational foundation and a passion for continuous learning, I am
        committed to making a positive impact in a professional setting while
        further honing my abilities and expertise.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes("/resume") ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
