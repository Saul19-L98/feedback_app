import React from "react";
import Card from "../components/shared/Card.jsx";
import { Link } from "react-router-dom";

function About() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a proudct or service</p>
        <p
          style={{
            textAlign: "center",
          }}
        >
          <Link to="/">Back to home 🏠</Link>
        </p>
        <div
          style={{
            margin: "1rem 0",
            textAlign: "center",
          }}
        >
          <a
            href="https://github.com/Saul19-L98/feedback-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            Feedback API ❓
          </a>
        </div>
        <dir
          style={{
            textAlign: "center",
          }}
        >
          <a
            href="https://github.com/Saul19-L98/feedback_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Feedback APP 👈
          </a>
        </dir>
      </div>
    </Card>
  );
}

export default About;
