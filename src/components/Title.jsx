import React from "react";
import "../assets/fonts/fonts.css"; // Import fonts

const Title = ({
  text,
  font = "CustomFont",
  size = "2rem",
  color = "#333",
}) => {
  return (
    <h1 className="title" style={{ fontFamily: font, fontSize: size, color }}>
      {text}
    </h1>
  );
};

export default Title;
