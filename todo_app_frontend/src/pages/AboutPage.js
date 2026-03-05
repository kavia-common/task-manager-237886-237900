import React from "react";

/**
 * PUBLIC_INTERFACE
 * About page describing the application and basic usage.
 */
export default function AboutPage() {
  return (
    <section className="container">
      <div className="pageTitleRow">
        <h1 className="pageTitle">About</h1>
        <p className="pageSubtitle">
          A lightweight, modern todo app focused on speed, clarity, and a clean workflow.
        </p>
      </div>

      <div className="card">
        <h2 className="cardTitle">What you can do</h2>
        <ul className="list">
          <li>Add tasks in seconds</li>
          <li>Mark tasks complete as you go</li>
          <li>Remove tasks you no longer need</li>
        </ul>

        <hr className="divider" />

        <h2 className="cardTitle">Design principles</h2>
        <p className="muted">
          This UI keeps the light theme, uses subtle borders/shadows, and favors simple typography with
          blue/cyan accents.
        </p>
      </div>
    </section>
  );
}
