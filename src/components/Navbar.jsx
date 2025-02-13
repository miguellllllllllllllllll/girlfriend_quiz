import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
        >
          Açucena
          <Box
            component="img"
            src="/src/assets/tiktokemoji.png"
            sx={{ height: 30, width: 30, ml: 1 }} // Höhe und Breite auf 20px setzen
            alt="Emoji"
          />
        </Typography>
        <Button color="inherit" value="about">
          About
        </Button>
        <Button color="inherit">Puzzles</Button>
        <Button color="inherit">Hunt</Button>
      </Toolbar>
    </AppBar>
  );
}
