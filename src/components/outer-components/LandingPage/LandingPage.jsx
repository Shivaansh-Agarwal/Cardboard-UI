import React from "react";
import { useHistory, Link } from "react-router-dom";
import imgLogo from "../../../assets/cardboard.svg";
import imgGithub from "../../../assets/icon-github.svg";
import imgTwitter from "../../../assets/icon-twitter.svg";
import imgLinkedin from "../../../assets/icon-linkedin.svg";

const LandingPage = () => {
  const history = useHistory();
  return (
    <div className="landing">
      <nav className="landing-nav">
        <div className="landing-nav-left">
          <img src={imgLogo} alt="logo" className="landing-logo-nav" />
          <Link className="landing-logo-name" to="/">
            Cardboard <span className="landing-logo-name-red">UI</span>
          </Link>
        </div>
        <div className="landing-nav-right">
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
      </nav>
      <main className="landing-main">
        <img src={imgLogo} alt="logo" className="landing-logo-main" />
        <div className="landing-desc">
          A ReactJS based Frontend component library for building fast & latest
          web-interfaces
        </div>
        <div className="landing-buttons">
          <button
            onClick={() => {
              history.push("/app/introduction");
            }}
            className="btn btn-primary"
          >
            Get Started
          </button>
          <button
            onClick={() => {
              window.open("https://github.com/Shivaansh-Agarwal/CardboardUI");
            }}
            className="btn btn-outline-secondary"
          >
            Source Code
          </button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
