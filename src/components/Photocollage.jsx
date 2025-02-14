import { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardMedia,
  Modal,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import { Close, ArrowBack, ArrowForward } from "@mui/icons-material";
import { useSwipeable } from "react-swipeable";

export default function PhotoCollage() {
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const imageModules = import.meta.glob(
      "/src/assets/drawings/*.{jpg,png,jpeg}"
    );

    Promise.all(
      Object.values(imageModules).map((importImage) => importImage())
    ).then((images) => {
      setImages(images.map((mod) => mod.default));
    });
  }, []);

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  // Swipen für Mobile
  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    trackTouch: true,
    trackMouse: true,
  });

  return (
    <>
      <Typography
        id="Art"
        variant="h4"
        color="primary"
        sx={{
          textAlign: "center",
          mt: 5,
          mb: 3,
        }}
        gutterBottom
      >
        My Art
      </Typography>
      <Grid container spacing={2}>
        {images.map((src, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card onClick={() => handleOpen(index)} sx={{ cursor: "pointer" }}>
              <CardMedia
                sx={{
                  height: 300,
                  objectFit: "cover",
                  border: "5px solid",
                  borderColor: "primary.main",
                }}
                component="img"
                image={src}
                alt={`Drawing ${index}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal für Vollbild-Anzeige */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "90vw",
            maxHeight: "90vh",
            display: "flex",
            alignItems: "center",
          }}
          {...handlers}
        >
          <IconButton
            onClick={prevImage}
            sx={{
              position: "absolute",
              height: "70px",
              width: "70px",
              left: -85,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <ArrowBack
              sx={{
                height: "30px",
                width: "30px",
              }}
            />
          </IconButton>

          <img
            src={images[currentIndex]}
            alt="Fullscreen"
            style={{
              maxHeight: "80vh",
              maxWidth: "80vw",
              objectFit: "contain",
            }}
          />

          <IconButton
            onClick={nextImage}
            sx={{
              position: "absolute",
              height: "70px",
              width: "70px",
              right: -85,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <ArrowForward
              sx={{
                height: "30px",
                width: "30px",
              }}
            />
          </IconButton>

          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              height: "70px",
              width: "70px",
              top: 10,
              right: 10,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <Close
              sx={{
                height: "30px",
                width: "30px",
              }}
            />
          </IconButton>
        </Box>
      </Modal>
    </>
  );
}
