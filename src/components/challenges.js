import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./challenges.css";

const Challenges = () => {
  const challengeGroups = [
    {
      group: "Bug Bounty Programs",
      description:
        "Participate in real-world bug bounty simulations and earn rewards.",
      challenges: [
        { title: "Bug Bounty 1", link: "/bug-bounty/1" },
        { title: "Bug Bounty 2", link: "/bug-bounty/2" },
      ],
    },
    {
      group: "Vulnerability Challenges",
      description:
        "Download files to find vulnerabilities and perform reverse engineering.",
      challenges: [
        {
          title: "Challenge 1: Buffer Overflow",
          link: "/vulnerability-challenges/1",
        },
        {
          title: "Challenge 2: SQL Injection",
          link: "/vulnerability-challenges/2",
        },
      ],
    },
    {
      group: "Interactive Labs",
      description:
        "Practice on live virtual machines and solve Capture the Flag (CTF) challenges.",
      challenges: [
        { title: "Interactive Lab 1", link: "/interactive-labs/1" },
        { title: "Interactive Lab 2", link: "/interactive-labs/2" },
      ],
    },
    {
      group: "Code Auditing",
      description:
        "Analyze code snippets for security flaws and improve your secure coding skills.",
      challenges: [
        { title: "Code Audit 1", link: "/code-auditing/1" },
        { title: "Code Audit 2", link: "/code-auditing/2" },
      ],
    },
  ];

  const [expandedGroup, setExpandedGroup] = useState(null);

  const toggleGroup = (group) => {
    setExpandedGroup(expandedGroup === group ? null : group);
  };

  return (
    <div className="challenges-container">
      <h1 className="challenges-title">Challenges</h1>
      <div className="challenges-list">
        {challengeGroups.map((group, index) => (
          <div key={index} className="challenge-group">
            {/* Group Title */}
            <div
              className="challenge-group-header"
              onClick={() => toggleGroup(group.group)}
            >
              <h2 className="challenge-group-title">{group.group}</h2>
              <p className="challenge-group-description">{group.description}</p>
              <span className="dropdown-icon">
                {expandedGroup === group.group ? "-" : "+"}
              </span>
            </div>

            {/* Dropdown Challenges */}
            {expandedGroup === group.group && (
              <div className="challenge-dropdown">
                {group.challenges.map((challenge, idx) => (
                  <Link
                    to={challenge.link}
                    key={idx}
                    className="challenge-link"
                  >
                    <div className="challenge-card">
                      <h3 className="challenge-title">{challenge.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenges;
