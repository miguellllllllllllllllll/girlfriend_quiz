import QuizApp from "./pages/quiz";
import Pinpad from "./pages/Pinpad";
import Homepage from "./pages/Homepage";
import Letter from "./pages/Letter";
import "/src/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// 🎨 MUI Theme mit Primary Color definieren
const theme = createTheme({
  palette: {
    primary: {
      main: "#F44E3F", // Dein Primär-Farbton
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Stellt sicher, dass MUI Styles übernommen werden */}
      <BrowserRouter>
        <Routes>
          {/* Weiterleitung von "/" nach "/homepage" */}
          <Route path="/" element={<Navigate to="/homepage" />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/letter/" element={<Letter />} />
          <Route path="/quiz/*" element={<QuizApp />} />
          <Route path="/pinpad" element={<Pinpad />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
