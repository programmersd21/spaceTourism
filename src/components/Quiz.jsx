import React, { useState } from "react";
import Navbar from "./Navbar";

const questions = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Which planet has the most moons?",
    options: ["Mars", "Saturn", "Jupiter", "Neptune"],
    answer: "Saturn",
  },
  {
    question: "Which is the hottest planet in the solar system?",
    options: ["Mercury", "Venus", "Mars", "Jupiter"],
    answer: "Venus",
  },
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="text-white bg-black min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-12">
        <h1 className="text-3xl mb-6">Quiz Arena</h1>
        {showScore ? (
          <div className="text-xl">Your Score: {score}/{questions.length}</div>
        ) : (
          <div className="w-full max-w-md">
            <h2 className="text-xl mb-4">{questions[current].question}</h2>
            <div className="flex flex-col gap-2">
              {questions[current].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;