import { useEffect, useState } from 'react'
import axios from 'axios'

export default function CategoryButton ({categoryView, setCategoryView, questionView, setQuestionView}) {
    const categoriesUrl = 'https://opentdb.com/api_category.php'
    const [category, setCategory] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(null)

    useEffect(() => {
        axios
            .get(categoriesUrl)
            .then((response) => {
                console.log(response.data.trivia_categories)
                setCategory(response.data.trivia_categories)
            })
    }, [])

    const fetchQuestion = (catId) => {
        const questionUrl = `https://opentdb.com/api.php?amount=1&category=${catId}&difficulty=medium&type=multiple`
        axios
        .get(questionUrl)
        .then((response) => {
          setCurrentQuestion(response.data.results[0])
        })
      }

    return (
        <>
        {category.map((category) => (
        <button className="category-button" key={category.index} onClick={() => {fetchQuestion(category.id); setCategoryView(false);}}>{category.name}</button>
        ))}
        </>
    )
}