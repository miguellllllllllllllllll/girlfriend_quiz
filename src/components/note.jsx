import React from "react";
import "/src/note.css";

const PaperTape = ({ text, color }) => {
  return (
    <div className={`paper ${color}`}>
      <div className="tape-section"></div>
      <p>{text}</p>
      {color === "pink" && <div className="tape-section"></div>}
      {color === "blue" && <div className="top-tape"></div>}
    </div>
  );
};

export default PaperTape;
