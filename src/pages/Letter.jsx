import { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Signature from "/src/assets/signature.svg";
export default function LoveLetter() {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background:
          "linear-gradient(to Bottom,rgb(255, 100, 95),rgb(254, 186, 123))",
        paddingTop: "50px",
      }}
    >
      <Box
        sx={{
          mt: "200px",
          position: "relative",
          width: "700px",
          height: "400px",
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

            zIndex: 4,
          }}
        >
          <img
            src={Signature}
            alt="Your Image"
            style={{
              width: "80%", // Adjust width as needed
              height: "auto",
              objectFit: "cover",
              borderRadius: "10px",
              marginTop: "320px",
              marginLeft: "20px",
              width: "200px",
            }}
          />
        </Box>

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
            zIndex: -1,
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
          initial={{ y: 20, opacity: 0 }} // Unsichtbar am Anfang
          animate={{
            y: open ? -200 : -20,
            opacity: open ? 1 : 0,
            zIndex: open ? 3 : 1,
          }} // Sichtbar, wenn geöffnet$
          transition={{
            type: "spring",
            stiffness: 20,
            opacity: { duration: 0.5 },
          }}
          style={{
            position: "absolute",
            borderRadius: "5px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 3,
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
              width: "650px",
              minHeight: "400px",

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
              Para o meu Amorzinho :3
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginTop: "20px", color: "#333", fontSize: "18px" }}
            >
              Já passou um ano desde que nos namoramos, e eu nunca estive tão
              Feliz como contigo. Eu amo-te para a lua e de volta. Eu tenho
              sempre tantas saudades tuas e não consigo esperar até verte outra
              vez. És a pessoa mais importante da minha vida, e eu não quero
              viver um dia sem ser o teu marido.
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginTop: "20px", color: "#333", fontSize: "18px" }}
            >
              - o teu Miguellito
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginTop: "20px", color: "#333", fontSize: "14px" }}
            >
              Mwahhh
            </Typography>
          </Paper>
        </motion.div>
      </Box>
    </Box>
  );
}
