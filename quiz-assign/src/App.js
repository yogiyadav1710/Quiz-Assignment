import {useState} from 'react';

import QuizScreen from "./components/QuizScreen.js"
import JoinScreen from "./components/JoinScreen.js"
import Header from './components/Header'

function App() {
  const [isQuizStarted,setIsQuizStarted]= useState(false);
  return (
    <>
      <Header />
      <div className='="quiz-container'>
        {
          isQuizStarted ? (
            <QuizScreen retry={()=>setIsQuizStarted(false)} />
          ): (
            <JoinScreen start={()=>setIsQuizStarted(true)} />
          )
        }
      </div>
  
</>
  );
}

export default App;
