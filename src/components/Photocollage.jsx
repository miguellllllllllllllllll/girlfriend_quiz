import React from "react";
import { Grid, Card, CardMedia } from "@mui/material";

const Photocollage = ({ images }) => {
  return (
    <Grid container spacing={2}>
      {images.map((src, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia component="img" image={src} alt={`Collage ${index}`} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Photocollage;
