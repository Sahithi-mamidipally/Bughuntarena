import React from "react";
import "./about.css"; // Optional: Add styles here if needed

const About = () => {
  return (
    <div className="about-page">
      <h1 className="text-center mt-5">About the Project</h1>
      <p className="text-center mt-3">
        Welcome to the Cybersecurity Learning Platform! This project is designed
        to provide hands-on experience in solving real-world cybersecurity
        challenges.
      </p>

      <div className="project-details mt-5">
        <h2>Project Summary</h2>
        <p>
          The platform offers a range of features including Bug Bounty Problems,
          Vulnerability Challenges, Interactive Labs, and Coding Audits. It uses
          Auth0 for secure user authentication and a responsive UI built with
          React and Reactstrap.
        </p>
        <h3>Key Features:</h3>
        <ul>
          <li>
            <strong>Bug Bounty Problems:</strong> Real-world scenarios to
            identify and exploit vulnerabilities.
          </li>
          <li>
            <strong>Vulnerability Challenges:</strong> Targeted exercises to
            practice specific cybersecurity techniques.
          </li>
          <li>
            <strong>Interactive Labs:</strong> Simulations of real-world
            environments for hands-on learning.
          </li>
          <li>
            <strong>Coding Audits:</strong> Improve code security through guided
            audits and best practices.
          </li>
        </ul>
      </div>

      <div className="team-section mt-5">
        <h2>Meet the Team</h2>
        <ul>
          <li>
            <strong>Rashmika Adusmilli:</strong> Lead Developer, specializing in
            React and backend integration.
          </li>
          <li>
            <strong>Jay:</strong> Security Analyst, focusing on SIEM
            integrations and secure infrastructure.
          </li>
          <li>
            <strong>Charith:</strong> Full Stack Developer, handling API
            development and frontend enhancements.
          </li>
          <li>
            <strong>Sahithi Mamidipally:</strong> Project Manager, overseeing
            team coordination and deliverables.
          </li>
          <div className="contact-us mt-5 text-center">
            <p>If you have any questions, feel free to reach out to us:</p>
            <a href="mailto:bughuntarena@yahoo.com" className="contact-link">
              Contact Us
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default About;
