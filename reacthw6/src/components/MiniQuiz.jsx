import React, {useState} from 'react';
import questions from './questions.js'
import QuizItem from './QuizItem.jsx';


const MiniQuiz = () => {

    const [currentIndex, setcurrentIndex] = useState(0);

    const [questionsList, setquestionsList] = useState(questions);

    const [correctAnswersCount, setcorrectAnswersCount] = useState(0);

    const nextQuestion = () => {
        setcurrentIndex(currentIndex + 1);
    }

    const answerQuestion = (isCorrect) => {
        if(isCorrect) {
            setcorrectAnswersCount(correctAnswersCount + 1);
        }
        nextQuestion();
    }

    return (
        <div>
            <h1>Mini Quiz</h1>
            {currentIndex < questionsList.length ? (<QuizItem question={questionsList[currentIndex]} answerQuestion={answerQuestion}/>)
             : (
                <h2>Тест завершено! Правильних відповідей: {correctAnswersCount}</h2>
            )}
        </div>
    );
}

export default MiniQuiz;