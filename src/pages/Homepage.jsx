import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../components/Navbar";
import "/src/Navbar.css";
import AboutMe from "../components/Aboutme";
import Photocollage from "../components/Photocollage";
import Portal from "../components/Portal";
import QuizApp from "./quiz";

// 🎨 MUI Theme mit Primary Color definieren
const theme = createTheme({
  palette: {
    primary: {
      main: "#F44E3F", // Blau (Standard von MUI)
    },
  },
});

function Homepage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Stellt sicher, dass MUI Styles übernommen werden */}
        <Navbar />
        <Portal />
        <AboutMe />
        <QuizApp />
        <Photocollage />
      </ThemeProvider>
    </>
  );
}

export default Homepage;
