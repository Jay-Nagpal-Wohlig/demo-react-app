import React from "react";

const About = () => {
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "40px 20px",
    },
    title: {
      fontSize: "2rem",
      color: "#282c34",
      marginBottom: "32px",
    },
    content: {
      backgroundColor: "white",
      borderRadius: "8px",
      padding: "32px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    section: {
      marginBottom: "32px",
    },
    subtitle: {
      fontSize: "1.5rem",
      color: "#282c34",
      marginBottom: "16px",
    },
    text: {
      color: "#666",
      lineHeight: "1.6",
      fontSize: "1rem",
    },
    list: {
      listStyle: "none",
      padding: 0,
    },
    listItem: {
      color: "#666",
      padding: "8px 0",
      borderBottom: "1px solid #eee",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About This App</h1>

      <div style={styles.content}>
        <section style={styles.section}>
          <h2 style={styles.subtitle}>Purpose</h2>
          <p style={styles.text}>
            This is a basic React application designed for demonstrating
            deployment processes. It includes common React features and best
            practices.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>Tech Stack</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>React 18</li>
            <li style={styles.listItem}>React Router</li>
            <li style={styles.listItem}>Create React App</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>Deployment Ready</h2>
          <p style={styles.text}>
            This application is ready to be deployed to various platforms
            including Kubernetes, Docker containers, or static hosting services.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
