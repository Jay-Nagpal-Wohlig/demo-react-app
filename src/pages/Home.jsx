import React, { useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hello World! 🌍");

  const features = [
    {
      title: "Fast Deployment",
      description: "Deploy your application quickly and efficiently",
      icon: "🚀",
    },
    {
      title: "Easy Testing",
      description: "Demonstrate your deployment process with this simple app",
      icon: "✅",
    },
    {
      title: "Production Ready",
      description: "Built with best practices for production environments",
      icon: "⚡",
    },
  ];

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  const messages = [
    "Hello World! 🌍",
    "Welcome to React! ⚛️",
    "Deployment Test! 🚀",
    "Keep Coding! 💻",
    "Success! 🎉",
  ];

  const changeMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  };

  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    hero: {
      textAlign: "center",
      padding: "60px 20px 20px",
    },
    title: {
      fontSize: "2.5rem",
      color: "#282c34",
      marginBottom: "16px",
    },
    subtitle: {
      fontSize: "1.2rem",
      color: "#666",
    },
    demoSection: {
      padding: "20px",
      display: "flex",
      justifyContent: "center",
    },
    demoCard: {
      backgroundColor: "white",
      borderRadius: "12px",
      padding: "40px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      textAlign: "center",
      minWidth: "400px",
    },
    demoTitle: {
      fontSize: "2rem",
      color: "#282c34",
      marginBottom: "24px",
    },
    counterDisplay: {
      fontSize: "4rem",
      fontWeight: "bold",
      color: "#61dafb",
      margin: "20px 0",
      padding: "20px",
      backgroundColor: "#f8f9fa",
      borderRadius: "8px",
    },
    buttonGroup: {
      display: "flex",
      gap: "12px",
      justifyContent: "center",
      marginTop: "24px",
    },
    button: {
      padding: "12px 24px",
      fontSize: "1rem",
      backgroundColor: "#f8f9fa",
      color: "#282c34",
      border: "2px solid #282c34",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "all 0.3s",
      fontWeight: "600",
    },
    buttonPrimary: {
      padding: "12px 24px",
      fontSize: "1rem",
      backgroundColor: "#282c34",
      color: "white",
      border: "2px solid #282c34",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "all 0.3s",
      fontWeight: "600",
    },
    counterText: {
      marginTop: "16px",
      fontSize: "1.1rem",
      color: "#666",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "24px",
      padding: "20px",
      marginTop: "40px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Welcome to Demo React App</h1>
        <p style={styles.subtitle}>
          A simple React application for demonstrating deployment workflows
        </p>
      </div>

      {/* Hello World Section */}
      <div style={styles.demoSection}>
        <div style={styles.demoCard}>
          <h2 style={styles.demoTitle}>{message}</h2>
          <button style={styles.button} onClick={changeMessage}>
            Change Message
          </button>
        </div>
      </div>

      {/* Counter Section */}
      <div style={styles.demoSection}>
        <div style={styles.demoCard}>
          <h2 style={styles.demoTitle}>Counter Demo</h2>
          <div style={styles.counterDisplay}>{count}</div>
          <div style={styles.buttonGroup}>
            <button style={styles.button} onClick={handleDecrement}>
              - Decrease
            </button>
            <button style={styles.buttonPrimary} onClick={handleReset}>
              Reset
            </button>
            <button style={styles.button} onClick={handleIncrement}>
              + Increase
            </button>
          </div>
          <p style={styles.counterText}>
            You've clicked {Math.abs(count)} time
            {Math.abs(count) !== 1 ? "s" : ""}
            {count !== 0 && (count > 0 ? " up! 📈" : " down! 📉")}
          </p>
        </div>
      </div>

      <div style={styles.grid}>
        {features.map((feature, index) => (
          <Card
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
