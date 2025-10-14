import React from "react";
import "../styles/madeby.css";
import Triquetra from '../assets/triquetra.png';
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
            {/* Triquetra symbol (Unicode version) */}
      <div className="triquetra-symbol"><img src={Triquetra} /></div>
      {/* Alternatively, you could use an SVG triquetra logo instead */}
    </div>
  );
};

export default MadeBy;