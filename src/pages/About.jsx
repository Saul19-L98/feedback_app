import React from "react";
import Card from "../components/shared/Card.jsx";
import { Link } from "react-router-dom";

function About() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a proudct or service</p>
        <p>
          <Link to="/">Back to home 🏠</Link>
        </p>
      </div>
    </Card>
  );
}

export default About;
