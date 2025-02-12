import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

export default function PortalComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center p-4">
      <Button variant="contained" onClick={() => setIsOpen(true)}>
        Portal öffnen
      </Button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogTitle>
          Portal
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
