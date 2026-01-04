import {useState} from 'react';
import {StartPage} from "./components/StartPage";
import {QuizPage} from "./components/QuizPage";
import './App.css';
import { Layout } from './components/Layout';

function App() {
  const [quizStarted , setQuizStarted] = useState(false);
  return (
    <Layout>
  {quizStarted ? <QuizPage/> : <StartPage changeQuizStatus={setQuizStarted}/> } 


    </Layout>    
      
    
  );
}

export default App;
