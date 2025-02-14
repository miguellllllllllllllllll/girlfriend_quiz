import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Title aligned to the left with flexGrow to push buttons right */}
        <Box
          component={Link}
          to="/homepage"
          sx={{
            textDecoration: "none",
            color: "white",
            flexGrow: 1, // Pushes buttons to the right
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white", // Ensure it stays white
              "&:hover": { color: "white" }, // Prevent hover color change
            }}
          >
            Açucena
            <Box
              component="img"
              src="/src/assets/tiktokemoji.png"
              sx={{ height: 30, width: 30, ml: 1 }} // Adjust emoji size
              alt="Emoji"
            />
          </Typography>
        </Box>

        {/* Buttons aligned to the right */}
        <Button id="about" color="inherit">
          About
        </Button>
        <Button id="puzzle" color="inherit">
          Puzzles
        </Button>
        <Button id="Art" color="inherit">
          Art
        </Button>
      </Toolbar>
    </AppBar>
  );
}
