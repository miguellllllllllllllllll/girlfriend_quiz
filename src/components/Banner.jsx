import React from "react";
import { Box, Typography } from "@mui/material";

const Banner = ({
  text,
  images = [], // Array von Bildern
  color = "#333", // Hintergrundfarbe
  font = "CustomFont",
  textColor = "#fff",
  size = "200px", // Standardhöhe
  fit = "cover", // "cover" oder "contain"
}) => {
  return (
    <Box
      sx={{
        backgroundColor: color,
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
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      {images.length > 0 && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
        >
          {images.map((image, index) => (
            <Box
              component="img"
              key={index}
              src={image}
              alt={`Banner ${index}`}
              sx={{
                display: "block",
                width: "auto",
                height: "100%",
                objectFit: fit,
              }}
            />
          ))}
        </Box>
      )}
      <Typography variant="h4" sx={{ position: "relative", zIndex: 2 }}>
        {text}
      </Typography>
    </Box>
  );
};

export default Banner;
