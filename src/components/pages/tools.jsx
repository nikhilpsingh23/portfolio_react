import React from "react";
import "../style/tools.css";
import { FaGitAlt, FaCode, FaClipboardList } from "react-icons/fa";
const Tools = () => {
  return (
    <>
      <div className="tools-section">
        <h2 className="tools-heading">My Tools</h2>
        <div className="tools-container">
          <div className="tool-card">
            <FaGitAlt className="tool-icon" />
            <h3>Git</h3>
            <p>Version control for managing code efficiently.</p>
          </div>
          <div className="tool-card">
            <FaCode className="tool-icon" />
            <h3>VS Code</h3>
            <p>Powerful and extensible code editor.</p>
          </div>
          <div className="tool-card">
            <FaClipboardList className="tool-icon" />
            <h3>Postman</h3>
            <p>API testing and debugging made easy.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
