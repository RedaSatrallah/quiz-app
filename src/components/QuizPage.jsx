import { QuestionDisplay } from "./QuestionDisplay";
import { useState } from "react";
import { questions } from "../data/questions";
import { ResultPage } from "./ResultPage";

export function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [hideQuestion, setHideQuestion] = useState(false);
  const Question = questions[currentIndex];
  function handleOptionSelect(selectedOption) {
    if (selectedOption === Question.answer && score <= questions.length) {
      setScore(score + 1);
      if (currentIndex === questions.length - 1) {
        setShowResult(true);
        setHideQuestion(true);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }else{
      if (currentIndex === questions.length - 1) {
        setShowResult(true);
        setHideQuestion(true);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
  }}

  return (
    <>
      {showResult && hideQuestion ? (
        <ResultPage score={score} totalQuestions={questions.length} />
      ) : (
        <QuestionDisplay
          currentQuestion={Question}
          handleActivity={handleOptionSelect}
        />
      )}
    </>
  );
}
