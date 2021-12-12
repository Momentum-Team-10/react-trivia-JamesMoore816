import he from 'he'
import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css';
import CategoryButton from './components/CategoryButton.js';
import QuestionView from './components/QuestionView.js'
import CategoryView from './components/CategoryView.js'

export function App() {
  const categoriesUrl = 'https://opentdb.com/api_category.php'
  const [categoryList, setCategoryList] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [currentCategory, setCurrentCategory] = useState(null)
  const [correctAnswer, setCorrectAnswer] = useState(null)
  const [wrongAnswers, setWrongAnswers] = useState([])
  const [questionAnswered, setQuestionAnswered] = useState(null)
  // let totalAnswered = 0
  // let totalCorrect = 0


  const fetchQuestion = (catId) => {
    const questionUrl = `https://opentdb.com/api.php?amount=1&category=${catId}&difficulty=medium&type=multiple`
    axios
      .get(questionUrl)
      .then((response) => {
        console.log(response.data.results[0])
        setCurrentQuestion(response.data.results[0])
        setWrongAnswers(response.data.results[0].incorrect_answers)
        setCorrectAnswer(response.data.results[0].correct_answer)
        setQuestionAnswered(false)
      })
  }


  useEffect(() => {
    axios
      .get(categoriesUrl)
      .then((response) => {
        console.log(response.data.trivia_categories)
        setCategoryList(response.data.trivia_categories)
      })
  }, [])



  return (
    <>
      <h1>Welcome to React Trivia!</h1>
      
      {currentQuestion ?
        <QuestionView category={currentQuestion.category} question={currentQuestion.question} correctAnswer={correctAnswer} wrongAnswers={wrongAnswers} fetchQuestion={fetchQuestion} questionAnswered={questionAnswered} currentCategory={currentCategory} setQuestionAnswered={setQuestionAnswered} setCurrentQuestion={setCurrentQuestion}></QuestionView>
        :
        <CategoryView categoryList={categoryList} setCurrentCategory={setCurrentCategory} fetchQuestion={fetchQuestion}></CategoryView>
        }
    </>
  )
}

export default App;