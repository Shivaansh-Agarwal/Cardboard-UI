import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside className="aside-wrapper left-nav">
      <Link to="/" className="item link link-big">
        Introduction
      </Link>
      <section className="item">
        <h3 className="section-header">Elements</h3>
        <Link to="/button" className="link link-small">
          Button
        </Link>
        <Link to="/image" className="link link-small">
          Image
        </Link>
        <Link to="/input" className="link link-small">
          Input
        </Link>
      </section>
      <section className="item">
        <h3 className="section-header">Components</h3>
        <Link to="/avatar" className="link link-small">
          Avatar
        </Link>
        <Link to="/alert" className="link link-small">
          Alert
        </Link>
        <Link to="/badge" className="link link-small">
          Badge
        </Link>
        <Link to="/card" className="link link-small">
          Card
        </Link>
        <Link to="/list" className="link link-small">
          List
        </Link>
        <Link to="/navigation" className="link link-small">
          Navigation
        </Link>
        <Link to="/modal" className="link link-small">
          Modal
        </Link>
        <Link to="/toast" className="link link-small">
          Toast
        </Link>
      </section>
    </aside>
  );
};

export default Aside;
