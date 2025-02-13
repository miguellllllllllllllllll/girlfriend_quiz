import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";

function AboutMe() {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 5 }}>
      <Container maxWidth="md">
        <Card sx={{ p: 3, textAlign: "center" }}>
          <CardContent>
            {/* Profilbild */}
            <Avatar
              src="/src/assets/profile.jpg"
              alt="Mein Profilbild"
              sx={{ width: 100, height: 100, margin: "0 auto", mb: 2 }}
            />

            {/* Titel */}
            <Typography variant="h4" color="primary" id="about" gutterBottom>
              About
            </Typography>

            {/* Beschreibung */}
            <Typography variant="body1" paragraph>
              Hi! This is a website about my Husbant Açucena, ein
              leidenschaftlicher Entwickler mit Fokus auf moderne
              Web-Technologien. Ich arbeite mit React, TypeScript und Python und
              entwickle innovative Softwarelösungen.
            </Typography>

            <Typography variant="body1" paragraph>
              In meiner Freizeit interessiere ich mich für KI,
              Open-Source-Projekte und Fitness. Ich liebe es, neue Technologien
              zu erkunden und kreative Lösungen für komplexe Probleme zu finden.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default AboutMe;
