import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
} from "@mui/material";
import avatar from "/src/assets/secondpic.jpg";

export default function AboutMe() {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 5 }}>
      <Container maxWidth="md">
        <Card sx={{ p: 3, textAlign: "center", boxShadow: 3 }}>
          <CardContent>
            {/* Profilbild */}
            <Avatar
              src={avatar}
              alt="Mein Profilbild"
              sx={{ width: 100, height: 100, margin: "0 auto", mb: 2 }}
            />

            {/* Titel */}
            <Typography variant="h4" color="primary" id="about" gutterBottom>
              Hello everyone!
            </Typography>

            {/* Beschreibung */}
            <Typography variant="body1" paragraph>
              This is a website about my Partner Açucena. 😊
            </Typography>

            <Typography variant="body1" paragraph>
              She’s a 17-year-old Portuguese-Albanian who will be starting her
              studies soon. She loves drawing, listening to music, and, of
              course, her cat Amelie!
            </Typography>
          </CardContent>
        </Card>

        {/* Açucena's Info Card */}
        <Card sx={{ p: 3, mt: 4, boxShadow: 3 }}>
          <CardContent sx={{ display: "flex", alignItems: "center" }}>
            {/* Album Cover */}
            <Box
              component="img"
              src="/src/assets/firstpic.jpg"
              alt="Album 1 Cover"
              sx={{ width: 180, height: 260, borderRadius: 2, mr: 3 }}
            />

            {/* Album Info */}
            <Box>
              <Typography variant="h5" fontWeight="bold">
                About her!!
              </Typography>
              <List dense>
                <ListItem>
                  <strong>Name:</strong> Açucena
                </ListItem>
                <ListItem>
                  <strong>Age:</strong> 17
                </ListItem>
                <ListItem>
                  <strong>Ethnicity:</strong> Portuguese-Albanian ❤️💚❤️🖤
                </ListItem>
                <ListItem>
                  <strong>Favourite Food:</strong> Chilli con carne
                </ListItem>
                <ListItem>
                  <strong>Favourite Bands:</strong> Snow Strippers, Mindless
                  Self Indulgence
                </ListItem>
                <ListItem>
                  <strong>Favourite Color:</strong> Red
                </ListItem>
                <ListItem>
                  <strong>Favourite Movie:</strong> Good Will Hunting
                </ListItem>
                <ListItem>
                  <strong>Favourite Franchise</strong> Devil May Cry
                </ListItem>
                <ListItem>
                  <strong>Favourite Person:</strong> Miguel
                </ListItem>
                <ListItem>
                  <strong>Favourite Bro:</strong> Amelie!
                </ListItem>
              </List>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
