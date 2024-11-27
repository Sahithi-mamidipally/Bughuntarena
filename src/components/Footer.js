import React from "react";
import logo from "./logo.jpeg"; // Update this path to match your logo's location

const Footer = () => (
  <footer className="bg-light p-3 text-center">
    <img
      src={logo}
      alt="Cyber World Logo"
      style={{
        width: "50px",
        height: "50px",
        marginBottom: "10px",
        borderRadius: "50%", // Makes the image circular
        objectFit: "cover", // Ensures the image fits well in the circle
      }}
    />
    <p>
      © 2024 Cyber World Project. All rights reserved.{" "}
      <a href="https://cyber-world-project.vercel.app/">CYBER WORLD</a>
    </p>
  </footer>
);

export default Footer;
