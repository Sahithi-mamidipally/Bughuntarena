import React from "react";
import "./challenges.css";

const Challenges = () => {
  const challengeData = [
    {
      title: "Bug Bounty Programs",
      description:
        "Participate in real-world bug bounty simulations and earn rewards.",
    },
    {
      title: "Vulnerability Challenges",
      description:
        "Download files to find vulnerabilities and perform reverse engineering.",
    },
    {
      title: "Interactive Labs",
      description:
        "Practice on live virtual machines and solve Capture the Flag (CTF) challenges.",
    },
    {
      title: "Code Auditing",
      description:
        "Analyze code snippets for security flaws and improve your secure coding skills.",
    },
  ];

  return (
    <div className="challenges-container">
      <h1 className="challenges-title">Challenges</h1>
      <div className="challenges-list">
        {challengeData.map((challenge, index) => (
          <div className="challenge-card" key={index}>
            <h2 className="challenge-title">{challenge.title}</h2>
            <p className="challenge-description">{challenge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenges;
