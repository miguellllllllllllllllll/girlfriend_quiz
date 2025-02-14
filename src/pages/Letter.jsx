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
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "350px",
          height: "250px",
        }}
      >
        {/* Envelope Bottom Part */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#d32f2f",
            borderRadius: "5px 5px 10px 10px",
            borderBottom: "10px",

            zIndex: 1,
          }}
        />

        {/* Envelope Flap */}
        <motion.div
          initial={{ rotateX: 0, zIndex: 3 }} // Start: Über dem Brief
          animate={{ rotateX: open ? 180 : 0, zIndex: open ? 1 : 3 }} // Nach Animation: Hinter den Brief
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
          initial={{ y: 100 }}
          animate={{ y: open ? -180 : 100 }}
          transition={{ type: "spring", stiffness: 100 }}
          style={{
            position: "absolute",
            borderRadius: "5px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
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
              width: "300px",
              textAlign: "center",
              backgroundColor: "#fff",
              borderRadius: "16px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "#d32f2f", fontWeight: "bold" }}
            >
              My Dearest Love,
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginTop: "16px", color: "#333" }}
            >
              From the moment I met you, my world has been filled with warmth
              and joy. You are the light in my life, and I cherish every second
              we spend together.
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginTop: "16px", color: "#333" }}
            >
              With all my love, forever and always.
            </Typography>
          </Paper>
        </motion.div>
      </Box>
    </Box>
  );
}
