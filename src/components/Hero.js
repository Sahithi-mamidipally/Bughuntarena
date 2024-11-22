/*import React from "react";
import logo from "../assets/logo.svg";
import { useAuth0 } from "@auth0/auth0-react";

const Hero = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="text-center hero">
      <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
      <h1 className="mb-4">React Sample Project</h1>
      {!isAuthenticated && <p className="lead">Please login to continue</p>}
    </div>
  );
};

// Make sure this export default statement is present
export default Hero;*/

// src/components/Hero.js
/*import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const Hero = () => {
  const { isAuthenticated } = useAuth0();

  // If user is authenticated, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Welcome to</span>
            <span className="block text-blue-600">Our Platform</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Please login to access your dashboard and manage your account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;*/

import React from "react";
import logo from "../assets/logo.svg";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./home.css";
const Hero = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  // Redirect to /dashboard if the user is authenticated
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          WELCOME TO <br></br>
          <span className="highlight-text">CYBER WORLD!</span>
        </h1>
        <p className="hero-description">
          A user-friendly learning platform. Come let's solve complex challenges
          together.
        </p>
        <div className="hero-buttons">
          <button
            className="btn btn-primary"
            onClick={() => loginWithRedirect()} // Call Auth0 login
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
