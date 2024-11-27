import React from "react";
import "./resource.css"; // Add custom styles for Resources page

const Resources = () => {
  const freeResources = [
    {
      title: "TryHackMe",
      overview:
        "An interactive platform offering cybersecurity training through gamified labs and challenges.",
      link: "https://tryhackme.com/",
    },
    {
      title: "Hack The Box",
      overview:
        "A platform with virtual machines designed to teach penetration testing and ethical hacking skills.",
      link: "https://www.hackthebox.com/",
    },
    {
      title: "CyberDefenders",
      overview:
        "A platform providing free cybersecurity challenges to practice incident response and threat detection.",
      link: "https://www.cyberdefenders.org/",
    },
    {
      title: "Cybrary",
      overview:
        "Free online cybersecurity training for students, covering certifications like CompTIA Security+ and CEH.",
      link: "https://www.cybrary.it/",
    },
    {
      title: "OWASP",
      overview:
        "The Open Web Application Security Project offers free documentation, tools, and cybersecurity resources.",
      link: "https://owasp.org/",
    },
    {
      title: "Microsoft Security Virtual Training Days",
      overview:
        "Free Microsoft-hosted training sessions covering cybersecurity fundamentals and cloud security.",
      link: "https://www.microsoft.com/en-us/securitytraining",
    },
    {
      title: "Blue Team Labs Online",
      overview:
        "A platform focusing on defensive cybersecurity skills like threat hunting and digital forensics.",
      link: "https://blueteamlabs.online/",
    },
    {
      title: "CISA Cyber Essentials",
      overview:
        "Free resources from the U.S. Cybersecurity and Infrastructure Security Agency (CISA) to build cybersecurity skills.",
      link: "https://www.cisa.gov/cyber-essentials",
    },
    {
      title: "Google's Cybersecurity Basics",
      overview:
        "A free course on cybersecurity basics offered by Google, designed for beginners.",
      link: "https://grow.google/certificates/cybersecurity/",
    },
    {
      title: "Free Cybersecurity Books by Springer",
      overview:
        "Access free cybersecurity eBooks offered by Springer for topics like cryptography, network security, and more.",
      link: "https://link.springer.com/",
    },
  ];

  return (
    <div className="resources-container">
      <h1>Top Free Cybersecurity Resources</h1>
      <p>
        Explore these free resources to enhance your cybersecurity skills and
        prepare for a career in the field!
      </p>
      <div className="resources-list">
        {freeResources.map((resource, index) => (
          <div className="resource-card" key={index}>
            <h2>{resource.title}</h2>
            <p>{resource.overview}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              <button className="learn-more-button">Learn More</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
