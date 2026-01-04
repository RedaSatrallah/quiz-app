import { OptionButton } from "./OptionButton";

export function QuestionDisplay({ currentQuestion , handleActivity}) {
  return (
    <div>
      <h1>
        Question {currentQuestion.id}: {currentQuestion.question}
      </h1>

      <ul>
        {currentQuestion.options.map((option, idx) => (
          <li key={idx}>
            <OptionButton option={option} handleActivity={() => handleActivity(option)} />
          </li>
        ))}
      </ul>
    </div>
  );
}
