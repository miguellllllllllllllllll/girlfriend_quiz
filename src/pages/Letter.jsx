import React, { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

export default function LoveLetter() {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#ffebee",
        paddingTop: "50px",
      }}
    >
      <Box
        sx={{
          mt: "200px",
          position: "relative",
          width: "400px",
          height: "300px",
        }}
      >
        {/* Umschlag Unterteil */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#d32f2f",
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 50% 50%, 0% 0%)",
            // 50% 50% = cutout

            borderRadius: "5px 5px 10px 10px",
            borderBottom: "10px",

            zIndex: 3,
          }}
        />

        {/* Umschlag Deckel */}
        <motion.div
          initial={{ rotateX: 0, zIndex: 3 }}
          animate={{ rotateX: open ? 180 : 0, zIndex: open ? 1 : 3 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "50%",
            backgroundColor: "#b71c1c",

            borderRadius: "5px 5px 0 0",

            clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
            transformOrigin: "top",
            cursor: "pointer",
          }}
          onClick={() => setOpen(!open)}
        />

        <motion
          initial={{ rotateX: 0 }}
          animate={{ rotateX: open ? 180 : 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "50%",
            backgroundColor: "#9F1919",
            borderRadius: "5px 5px 0 0",
            clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
            transformOrigin: "top",

            zIndex: 2,
          }}
        />

        {/* Love Letter */}
        <motion.div
          initial={{ y: 120, opacity: 0 }} // Unsichtbar am Anfang
          animate={{ y: open ? -200 : 120, opacity: open ? 1 : 0 }} // Sichtbar, wenn geöffnet
          transition={{
            type: "spring",
            stiffness: 100,
            opacity: { duration: 0.5 },
          }}
          style={{
            position: "absolute",
            borderRadius: "5px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            display: open ? "block" : "none", // Falls gewünscht, kann opacity alleine genutzt werden
          }}
        >
          <Paper
            elevation={10}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "32px",
              width: "370px",
              textAlign: "center",
              backgroundColor: "#fff",
              borderRadius: "16px",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#d32f2f", fontWeight: "bold" }}
            >
              My Dearest Love,
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginTop: "20px", color: "#333", fontSize: "18px" }}
            >
              From the moment I met you, my world has been filled with warmth
              and joy. You are the light in my life, and I cherish every second
              we spend together.
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginTop: "20px", color: "#333", fontSize: "18px" }}
            >
              With all my love, forever and always.
            </Typography>
          </Paper>
        </motion.div>
      </Box>
    </Box>
  );
}
