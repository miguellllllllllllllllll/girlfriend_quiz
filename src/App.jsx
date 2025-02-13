import QuizApp from "./pages/quiz";
import Pinpad from "./pages/Pinpad";
import Homepage from "./pages/Homepage";
import "/src/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Letter from "./pages/Letter";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
