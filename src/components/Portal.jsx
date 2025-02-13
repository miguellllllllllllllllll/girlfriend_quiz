import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

export default function PortalComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center p-4">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          allignItems: "center",
        }}
      >
        <Button variant="contained" onClick={() => setIsOpen(true)}>
          Puzzles
        </Button>
      </Box>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogTitle>
          Puzzles
          <IconButton
            aria-label="close"
            onClick={() => setIsOpen(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/quiz/start"
          >
            Zum Quiz wechseln
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
