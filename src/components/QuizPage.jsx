import { QuestionDisplay } from "./QuestionDisplay";
import { useState } from "react";
import { questions } from "../data/questions";

export function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score,setScore] = useState(0);
  const [showResult,setShowResult] = useState(false);
  const Question = questions[currentIndex];
  function handleOptionSelect(selectedOption) {
    if (selectedOption === Question.answer) {
      setScore(score + 1);
      if (currentIndex === questions.length-1) {
      setShowResult(true);
    }else {
      setCurrentIndex(currentIndex + 1);
    }
  }
  return (
    <>
      <QuestionDisplay currentQuestion={Question} handleActivity={handleOptionSelect}/>
    </>
  );
}
}