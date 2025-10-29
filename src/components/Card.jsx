import React from "react";

const Card = ({ title, description, icon }) => {
  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "24px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  };

  const iconStyle = {
    fontSize: "2rem",
    marginBottom: "16px",
  };

  const titleStyle = {
    fontSize: "1.25rem",
    marginBottom: "12px",
    color: "#282c34",
  };

  const descriptionStyle = {
    color: "#666",
    lineHeight: "1.6",
  };

  return (
    <div style={cardStyle}>
      <div style={iconStyle}>{icon}</div>
      <h3 style={titleStyle}>{title}</h3>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

export default Card;
