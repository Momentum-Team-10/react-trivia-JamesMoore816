import { useEffect, useState } from 'react'
import axios from 'axios'
import Categories from './components/Categories.js'
import CategoryView from './components/CategoryView.js';
import QuestionView from './components/QuestionView.js';
import './App.css';

export function App() {
  const [categoryView, setCategoryView] = useState(true)
  const [questionView, setQuestionView] = useState(false)

  return (
    <>
    <h1>Welcome to React Trivia!</h1>
    <div className="App">
      <CategoryView categoryView={categoryView} setCategoryView={setCategoryView} questionView={questionView} setQuestionView={setQuestionView}></CategoryView>
      <QuestionView categoryView={categoryView} setCategoryView={setCategoryView} questionView={questionView} setQuestionView={setQuestionView}></QuestionView>
    </div>
    </>
  );
}

export default App;
