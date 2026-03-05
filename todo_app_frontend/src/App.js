import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

/**
 * PUBLIC_INTERFACE
 * Root application component. Provides client-side routing and shared layout.
 */
export default function App() {
  return (
    <Router>
      <div className="appShell">
        <Header />
        <main className="appMain" role="main">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
