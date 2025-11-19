import React from 'react';
import uniqid from 'uniqid';

const QuizItem = ({question, answerQuestion}) => {
    
    return (
        <div className='quiz-item'>
            <h2>{question.question}</h2>

            <div className='answers'>
                {question.answers.map((answer) => (
                    <button key={uniqid()} onClick={() => answerQuestion(answer === question.correct)}>{answer}</button>
                ))}
            </div>
        </div>
    );
}

export default QuizItem;
