import React from "react";
import { Link } from "react-router-dom";

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
    </aside>
  );
};

export default Aside;
