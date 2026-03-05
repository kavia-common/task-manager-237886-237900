import React from "react";

/**
 * PUBLIC_INTERFACE
 * Home page (primary Todo experience).
 * This is intentionally minimal here; existing/future todo UI should live on this route.
 */
export default function HomePage() {
  return (
    <section className="container">
      <div className="pageTitleRow">
        <h1 className="pageTitle">Your tasks</h1>
        <p className="pageSubtitle">Add, complete, and keep track of what matters.</p>
      </div>

      <div className="card">
        <p className="muted">
          Task list UI goes here. (This scaffold was added to introduce routing + About page.)
        </p>
      </div>
    </section>
  );
}
