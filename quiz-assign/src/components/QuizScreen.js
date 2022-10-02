import { useRef, useState } from "react";

import QuizResult from './QuizResult.js'
import Data from "../data/questions.json"
import Question from "./Question.js"

// let cor=0;

function QuizScreen({ retry }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [markedAnswers, setMarkedAnswers] = useState(new Array(Data.length));
    const corrected = 0;
    const [isQuestionEnd, setisQuestionEnd] = useState(false);

    const calculateResult = () => {
        console.log("into calculate");
        Data.QuestionList.forEach((question, index) => {
            if (question.correctOptionIndex == markedAnswers[index]) {
                console.log("into correct marks");
                // setCount((count)=>count+1);
                // setCorrect(corrected=>corrected+1);
                // console.log("correct" + question.correctOptionIndex);
                corrected=corrected+1;
            }

        });
        return {

            total: Data.QuestionList.length,

            correct: corrected,

        };
    }

    // const calculateResult = () => {
    //     console.log("into calculate");
    //     let calcResData = Data.QuestionList;
    //     // console.log(calcResData[0].correctOptionIndex);

    //     calcResData.forEach((question, i) => {
    //         // console.log(question.correctOptionIndex==);
    //         console.log(`ans`);
    //         console.log(markedAnswers[i]);
    //         console.log(question.correctOptionIndex == markedAnswers[i]);
    //         let check = question.correctOptionIndex == markedAnswers[i];

    //         if (check) {
    //             corrected = corrected + 1;
    //         }

    //         console.log(`corrected ${corrected}`);

    //     });
    //     return {
    //         total: Data.QuestionList.length,

    //         correct: corrected,
    //     };
    // };
    return (
        <div className="quiz-screen">
            {
                isQuestionEnd ? (
                    <QuizResult
                        result={calculateResult()}
                        retry={retry}
                        // count={count}
                        correct={corrected}
                    />
                ) : (
                    <Question
                        question={Data.QuestionList[currentQuestionIndex]}
                        totalQuestions={Data.QuestionList.length}
                        currentQuestion={currentQuestionIndex}
                        setAnswer={(index) => {
                            setMarkedAnswers((arr) => {
                                let newArr = [...arr];
                                newArr[currentQuestionIndex - 1] = index;
                                return newArr;
                            });
                            setCurrentQuestionIndex(currentQuestionIndex + 1);
                        }}
                        setisQuestionEnd={setisQuestionEnd}
                        setCurrentQuestionIndex={setCurrentQuestionIndex}
                    />
                )
            }

        </div>

    )
}

export default QuizScreen; 