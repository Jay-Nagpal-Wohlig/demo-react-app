import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#282c34",
    padding: "2rem 0",
    marginTop: "auto",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    textAlign: "center",
  };

  const textStyle = {
    color: "white",
    fontSize: "0.9rem",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={textStyle}>
          © {new Date().getFullYear()} Demo React App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
