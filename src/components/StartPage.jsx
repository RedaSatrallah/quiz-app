export function StartPage({ changeQuizStatus }) {
  function handleClick() {
    changeQuizStatus(true);
  }

  return (
    <>
      <h1>welcome to the Quiz</h1>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={handleClick}
      >
        Start Quiz
      </button>
    </>
  );
}
