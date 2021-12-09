import { useEffect, useState } from 'react'
import axios from 'axios'
// import Categories from './components/Categories.js'
// import CategoryView from './components/CategoryView.js';
// import QuestionView from './components/QuestionView.js';
// import CategoryButtons from './components/CategoryButtons.js';
// import PlayQuestion from './components/PlayQuestion.js';
import './App.css';

export function App() {
  const categoriesUrl = 'https://opentdb.com/api_category.php'
  const [categoryList, setCategoryList] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [categoryView, setCategoryView] = useState(true)
  const [questionView, setQuestionView] = useState(false)
  const [currentCategory, setCurrentCategory] = useState(null)
  const [correctAnswer, setCorrectAnswer] = useState(null)
  const [wrongAnswers, setWrongAnswers] = useState([])

	const fetchQuestion = (catId) => {
    const questionUrl = `https://opentdb.com/api.php?amount=1&category=${catId}&difficulty=medium&type=multiple`
    axios
    .get(questionUrl)
    .then((response) => {
      console.log(response.data.results[0])
      setCurrentQuestion(response.data.results[0])
      setWrongAnswers(response.data.results[0].incorrect_answers)
      setCorrectAnswer(response.data.results[0].correct_answer)
    })
  }

  const checkAnswer = (answer) => {
    if (answer === correctAnswer) {return true}
    else {return false}
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
    {categoryList.map((category) => (
        <button className="category-button" key={category.index} onClick={() => {fetchQuestion(category.id); setCurrentCategory(category.id);}}>{category.name}</button>
        ))}
    {currentQuestion ?
    <>
      <h3>Category: {currentQuestion.category}</h3>
      <p>{currentQuestion.question}</p>
      {wrongAnswers.concat(correctAnswer).map((answer) => (
        <button className="answer-button" key={answer.index} onClick={() => {checkAnswer(answer)}}>{answer}</button>
      ))}
      <button className="next-question-button" onClick={() => {fetchQuestion(currentCategory)}}>Next Question</button>
    </>
    :
    ''}
    </>
  )
}

export default App;