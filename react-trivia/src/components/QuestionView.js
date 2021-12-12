import he from 'he'
import { useState } from 'react'
import AnswerButton from './AnswerButton.js'

export default function QuestionView(props) {
    const { question, category, correctAnswer, wrongAnswers, fetchQuestion, questionAnswered, currentCategory, setQuestionAnswered, setCurrentQuestion } = props
    const [answerCorrect, setAnswerCorrect] = useState(null)

    const shuffleArray = (array) => {
        let currentIndex = array.length, randomIndex;
    
        while (currentIndex !== 0) {
    
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
    
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
    
        return array;
      }

    const checkAnswer = (thisAnswer) => {
        if (thisAnswer === correctAnswer) { setAnswerCorrect(true) }
        else { setAnswerCorrect(false) }
    }

    return (
        <>
            <h3>Category: {category}</h3>
            <p>{he.decode(question)}</p>

            {(answerCorrect === true) ?
                <p>You are correct!</p>
                :
                ''
            }
            {(answerCorrect === false) ?
                <p>Incorrect! The correct answer was {he.decode(correctAnswer)}</p>
                :
                ''
            }
            {(questionAnswered === true) ?
                <button className="next-question-button" onClick={() => { fetchQuestion(currentCategory); setQuestionAnswered(false); setAnswerCorrect(null) }}>Next Question</button>
                :
                ''
            }
            {(questionAnswered === false) ?
                <>
                    {shuffleArray(wrongAnswers.concat(correctAnswer)).map((answer) => (
                        <AnswerButton answer={answer} checkAnswer={checkAnswer} {...props}></AnswerButton>
                    ))}
                </>
                :
                ''
            }
            <button className="back-to-categories" onClick={() => setCurrentQuestion(null)}>Back to Category Selection</button>
        </>
    )

}