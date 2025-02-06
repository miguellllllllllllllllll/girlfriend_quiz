import React from "react";
import "../assets/fonts/fonts.css"; // Import fonts
import "/src/Banner.css"; // Styles for the banner

const Banner = ({
  text,
  images = [], // Array of images
  color = "#333", // Background color
  font = "CustomFont",
  textColor = "#fff",
  size = "200px", // Default height
  fit = "cover", // "cover" or "contain"
}) => {
  const bannerStyle = {
    backgroundColor: color, // Always keep background color
    height: size,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: font,
    color: textColor,
    textAlign: "center",
    padding: "20px",
    width: "100%",
    position: "relative",
    overflow: "hidden",
  };

  const imagesContainerStyle = {
    display: "flex",
    gap: "0px", // ❌ Entfernt jeglichen Abstand
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  };

  const imageStyle = {
    display: "block",
    margin: "0", // ❌ Entfernt Abstand
    padding: "0", // ❌ Entfernt Abstand
    border: "none", // ❌ Falls ein Rahmen da ist
    width: "auto",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div className="banner" style={bannerStyle}>
      {images.length > 0 && (
        <div style={imagesContainerStyle}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Banner ${index}`}
              style={imageStyle}
            />
          ))}
        </div>
      )}
      <h1 style={{ position: "relative", zIndex: 2 }}>{text}</h1>
    </div>
  );
};

export default Banner;
