import React from "react";
import { Link } from "react-router-dom";
import imgGithub from "../../../assets/icon-github.svg";
import imgTwitter from "../../../assets/icon-twitter.svg";
import imgLinkedin from "../../../assets/icon-linkedin.svg";

const Aside = () => {
  return (
    <aside className="aside-wrapper left-nav">
      <Link to="/docs/introduction" className="item link link-big">
        Introduction
      </Link>
      <section className="item">
        <h3 className="section-header">Elements</h3>
        <Link to="/docs/button" className="link link-small">
          Button
        </Link>
        <Link to="/docs/image" className="link link-small">
          Image
        </Link>
        <Link to="/docs/input" className="link link-small">
          Input
        </Link>
      </section>
      <section className="item">
        <h3 className="section-header">Components</h3>
        <Link to="/docs/avatar" className="link link-small">
          Avatar
        </Link>
        <Link to="/docs/alert" className="link link-small">
          Alert
        </Link>
        <Link to="/docs/badge" className="link link-small">
          Badge
        </Link>
        <Link to="/docs/card" className="link link-small">
          Card
        </Link>
        <Link to="/docs/list" className="link link-small">
          List
        </Link>
        <Link to="/docs/grid" className="link link-small">
          Grid
        </Link>
        <Link to="/docs/navigation" className="link link-small">
          Navigation
        </Link>
        <Link to="/docs/modal" className="link link-small">
          Modal
        </Link>
        <Link to="/docs/toast" className="link link-small">
          Toast
        </Link>
      </section>
      <section className="aside-author">
        <div className="aside-name">By - Shivaansh Agarwal</div>
        <div className="aside-social">
          <a
            href="https://twitter.com/Shivansh_97"
            target="_blank"
            rel="noreferrer"
          >
            <img src={imgTwitter} alt="Twitter Icon" />
          </a>
          <a
            href="https://github.com/Shivaansh-Agarwal"
            target="_blank"
            rel="noreferrer"
          >
            <img src={imgGithub} alt="Github Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/shivaansh-agarwal/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={imgLinkedin} alt="Linkedin Icon" />
          </a>
        </div>
      </section>
    </aside>
  );
};

export default Aside;
