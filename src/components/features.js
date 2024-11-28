import React from "react";
import "./features.css"; // Add a separate CSS file for styling

const Features = () => {
  const features = [
    {
      title: "BOX BREAKER CHALLENGES",
      description:
        "Test your skills by solving real-world bug bounty scenarios to identify and exploit vulnerabilities.",
    },
    {
      title: "VULNERABILITY CHALLENGES",
      description:
        "Learn and practice with targeted challenges focusing on specific vulnerabilities and techniques.",
    },
    {
      title: "INTERACTIVE LABS",
      description:
        "Engage in hands-on labs that simulate real-world environments for better understanding.",
    },
    {
      title: "CODING AUDITS",
      description:
        "Improve your code quality and security with guided audits and best practices.",
    },
  ];

  return (
    <div className="features-page">
      <h1 className="text-center mt-5">
        Welcome to the Features page! <br></br>Here are some of the key features
        of our platform:
      </h1>

      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-box" key={index}>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
