import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

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
      navigate("/quiz", { state: { name, category } });
    } else {
      alert("PLease choose a category and enter your name");
    }
  };

  return (
    <div>
      <h1>Welcome to the Açucena Quiz!</h1>
      <h2>A Quiz all about Açucena and Amelie :3</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="">Choose a category</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={startQuiz}>Start</button>

      <h2>🏆 Top 3 Players 🏆</h2>
      {leaderboard.length > 0 ? (
        <ul>
          {leaderboard.map((entry, index) => (
            <li key={index}>
              {index + 1}. {entry.name} - {entry.score} Punkte ({entry.time}s)
            </li>
          ))}
        </ul>
      ) : (
        <p>No entrys yet.</p>
      )}
    </div>
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
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(null);

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
    const correctAnswers = Array.isArray(questions[questionIndex].correct)
      ? questions[questionIndex].correct
      : [questions[questionIndex].correct]; // Ensure it's always an array

    const isCorrect = correctAnswers.includes(answer);

    setFeedback(isCorrect ? "Correct! 🎉" : "False! ❌");
    if (isCorrect) setScore((prevScore) => prevScore + 1);

    setTimeout(() => {
      if (questionIndex + 1 < questions.length) {
        setQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedAnswer(null);
        setFeedback("");
      } else {
        navigate("/results", { state: { score, time, name: playerName } });
      }
    }, 2000);
  };

  if (questions.length === 0) {
    return (
      <>
        <h3>Why would you do a quiz about that?</h3>
        <img src="/sus.jpg" alt="" />
      </>
    );
  }

  return (
    <div>
      <h2>{questions[questionIndex].text}</h2>
      <div>
        {questions[questionIndex].options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
      {feedback && <p>{feedback}</p>}
      <p>Time: {time} seconds</p>
    </div>
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
    <div>
      <h2>Results</h2>
      <p>Name: {name}</p>
      <p>
        Points: {score}/{quizData.Crewgröße.length}
      </p>
      <p>Time: {time} seconds</p>
      <Link to="/">New Quiz</Link>
    </div>
  );
}

function QuizApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default QuizApp;
