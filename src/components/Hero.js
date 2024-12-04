import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import "./home.css";

const Hero = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  // Redirect to /dashboard if the user is authenticated
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="home-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome To <br />
          <span className="highlight-text">BugHunt Arena!</span>
        </h1>
        <p className="hero-description">
          where you can hunt for vulnerabilities and bugs in the code and solve
          boxes.
        </p>
        <div className="hero-buttons">
          <button
            className="btn btn-primary"
            onClick={() => loginWithRedirect()}
          >
            Get started
          </button>
          <a href="/features" className="btn btn-secondary">
            Learn more →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;