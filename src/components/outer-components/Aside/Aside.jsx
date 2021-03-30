import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside className="aside-wrapper left-nav">
      <Link to="/app/introduction" className="item link link-big">
        Introduction
      </Link>
      <section className="item">
        <h3 className="section-header">Elements</h3>
        <Link to="/app/button" className="link link-small">
          Button
        </Link>
        <Link to="/app/image" className="link link-small">
          Image
        </Link>
        <Link to="/app/input" className="link link-small">
          Input
        </Link>
      </section>
      <section className="item">
        <h3 className="section-header">Components</h3>
        <Link to="/app/avatar" className="link link-small">
          Avatar
        </Link>
        <Link to="/app/alert" className="link link-small">
          Alert
        </Link>
        <Link to="/app/badge" className="link link-small">
          Badge
        </Link>
        <Link to="/app/card" className="link link-small">
          Card
        </Link>
        <Link to="/app/list" className="link link-small">
          List
        </Link>
        <Link to="/app/navigation" className="link link-small">
          Navigation
        </Link>
        <Link to="/app/modal" className="link link-small">
          Modal
        </Link>
        <Link to="/app/toast" className="link link-small">
          Toast
        </Link>
      </section>
    </aside>
  );
};

export default Aside;
