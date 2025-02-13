import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  Typography,
  Box,
  Card,
  CardContent,
  Container,
} from "@mui/material";

// Statische Quiz-Daten
const quizData = {
  Açucena: [
    {
      text: "How old is Açucena?",
      options: [17, 16, 18, 19],
      correct: 17,
    },
    {
      text: "What is Açucena's favorite color?",
      options: ["blue", "yellow", "red", "green"],
      correct: "red",
    },
    {
      text: "What is Açucena's favorite food?",
      options: ["Francesinha", "Chilli con carne", "Miguel", "Sushi"],
      correct: ["Chilli con carne", "Miguel"],
    },
  ],
  BigBlackMenBootyShaking: [],
};

function Home() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const [leaderboard, setLeaderboard] = useState([]);

  const categories = Object.keys(quizData);

  useEffect(() => {
    const savedLeaderboard =
      JSON.parse(localStorage.getItem("leaderboard")) || [];
    setLeaderboard(savedLeaderboard);
  }, []);

  const startQuiz = () => {
    if (name.trim() && category) {
      navigate("/quiz/quiz", { state: { name, category } });
    } else {
      alert("PLease choose a category and enter your name");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Açucena Quiz!
      </Typography>
      <Typography variant="subtitle1">
        A Quiz all about Açucena and Amelie :3
      </Typography>
      <TextField
        label="Enter your name"
        fullWidth
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mt: 2 }}
      />
      <Select
        fullWidth
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        displayEmpty
        sx={{ mt: 2 }}
      >
        <MenuItem value="">Choose a category</MenuItem>
        {categories.map((cat, index) => (
          <MenuItem key={index} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </Select>
      <Button
        variant="contained"
        color="primary"
        onClick={startQuiz}
        sx={{ mt: 3 }}
      >
        Start
      </Button>
      <Button component={Link} to="/homepage" sx={{ mt: 3 }}>
        Back to Homepage
      </Button>
      <Typography variant="h5" sx={{ mt: 4 }}>
        🏆 Top 3 Players 🏆
      </Typography>
      {leaderboard.length > 0 ? (
        <Box>
          {leaderboard.map((entry, index) => (
            <Typography key={index}>
              {index + 1}. {entry.name} - {entry.score} Points ({entry.time}s)
            </Typography>
          ))}
        </Box>
      ) : (
        <Typography>No entries yet.</Typography>
      )}
    </Container>
  );
}

function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name: playerName, category } = location.state || {
    name: "Anonym",
    category: "",
  };

  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(1);
  const [feedback, setFeedback] = useState("");
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [answerSelected, setAnswerSelected] = useState(false); // NEU

  const questions = quizData[category] || [];

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  useEffect(() => {
    if (startTime) {
      const interval = setInterval(() => {
        setTime(((Date.now() - startTime) / 1000).toFixed(2));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [startTime]);

  const handleAnswer = (answer) => {
    if (answerSelected) return; // Verhindere mehrfaches Klicken

    setAnswerSelected(true); // Verhindert weitere Klicks nach der ersten Antwort

    const correctAnswers = Array.isArray(questions[questionIndex].correct)
      ? questions[questionIndex].correct
      : [questions[questionIndex].correct];

    const isCorrect = correctAnswers.includes(answer);

    setFeedback(isCorrect ? "Correct! 🎉" : "False! ❌");
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setTimeout(() => {
      if (questionIndex + 1 < questions.length) {
        setQuestionIndex((prevIndex) => prevIndex + 1);
        setFeedback("");
        setAnswerSelected(false); // Aktiviert Buttons für die nächste Frage
      } else {
        navigate("/quiz/results", { state: { score, time, name: playerName } });
      }
    }, 2000);
  };

  if (questions.length === 0) {
    return (
      <>
        <Typography variant="h5" color="initial">
          Why would you do a quiz about that?
        </Typography>
        <img src="/src/assets/sus.jpg" alt="" />
        <Button component={Link} to="/quiz/start" sx={{ mt: 2 }}>
          New Quiz
        </Button>
      </>
    );
  }

  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Card>
        <CardContent>
          <Typography variant="h5">{questions[questionIndex].text}</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            {questions[questionIndex].options.map((option, index) => (
              <Button
                key={index}
                variant="contained"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </Button>
            ))}
          </Box>
          {feedback && (
            <Typography
              variant="h6"
              color={feedback.includes("Correct") ? "green" : "red"}
              sx={{ mt: 2 }}
            >
              {feedback}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}

function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, time, name } = location.state || {
    score: 0,
    time: 0,
    name: "Anonym",
  };

  useEffect(() => {
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

    // Neuen Eintrag hinzufügen
    const newEntry = { name, score, time: parseFloat(time) };
    const updatedLeaderboard = [...leaderboard, newEntry]
      .sort((a, b) => b.score - a.score || a.time - b.time)
      .slice(0, 3); // Nur die Top 3 behalten

    localStorage.setItem("leaderboard", JSON.stringify(updatedLeaderboard));
  }, [name, score, time]);

  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4">Results</Typography>
      <Typography variant="h6">Name: {name}</Typography>
      <Typography variant="h6">
        Score: {score} / {quizData.Açucena.length}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={() => navigate("/quiz/start")}
      >
        New Quiz
      </Button>
      <Button component={Link} to="/homepage" sx={{ mt: 2 }}>
        Back to Homepage
      </Button>
    </Container>
  );
}

function QuizApp() {
  return (
    <Routes>
      <Route path="/start" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
}

export default QuizApp;
