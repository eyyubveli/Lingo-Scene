import Question from "./components/question/Question";
import { ScoreProvider } from "./context/ScoreContext";
import { AnswerProvider } from "./context/AnswerContext";

function App() {
  return (
    <ScoreProvider>
      <AnswerProvider>
        <Question />
      </AnswerProvider>
    </ScoreProvider>
  );
}

export default App;
