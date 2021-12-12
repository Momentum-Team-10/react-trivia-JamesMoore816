import { useEffect, useState } from 'react'
import axios from 'axios'

export default function PlayQuestion() {
    const questionUrl = 'https://opentdb.com/api.php?amount=1&category=10&difficulty=medium&type=multiple'
    const [question, setQuestion] = useState([])
    const [incAnswers, setIncAnswers] = useState([])
    const [correctAnswer, setCorrectAnswer] = useState([])
    const [isCorrect, setIsCorrect] = useState(null)
    let answers = []

    const checkAnswer = (checkThis) => {
        if (checkThis === yesAnswer) {
            setIsCorrect(true)
        }
        else { setIsCorrect(false) }
        console.log(isCorrect)
    }

    const nextQuestion = () => {
        window.location.reload()
    }

    useEffect(() => {
        axios
            .get(questionUrl)
            .then((response) => {
                console.log(response.data.results)
                setQuestion(response.data.results)
                setIncAnswers(response.data.results[0].incorrect_answers)
                setCorrectAnswer(response.data.results[0].correct_answer)
            })
    }, [])

    let yesAnswer = correctAnswer
    console.log("correct answer is " + yesAnswer)
    answers = incAnswers.concat(correctAnswer)
    console.log(answers)
    let shuffledAnswers = answers.sort(() => Math.random() - 0.5)
    console.log(shuffledAnswers)

    return (
        <>
        {question.map((question) => (
            <p>{question.question}</p>
            ))}
        {shuffledAnswers.map((answer) => (
            <button className='answer-button' onClick={() => checkAnswer(answer)}>{answer}</button>
        ))}
        {isCorrect ?
        <>
        <div>You are correct!</div>
        <button className='nextQuestionButton' onClick={() => nextQuestion()}>Next question</button>
        </>
        :
        <div>You suck!</div>}
        </>
    )
}