import React from "react";
import "../styles/madeby.css";
const MadeBy: React.FC = () => {
  return (
    <div className="made-by-notice">
      <p className="made-by-text">
        Created with care by{" "}
        <a
          href="https://webc.gr"
          target="_blank"
          rel="noopener noreferrer"
          className="made-by-link"
        >
          webc.gr
        </a>
        
      </p>
    </div>
  );
};

export default MadeBy;