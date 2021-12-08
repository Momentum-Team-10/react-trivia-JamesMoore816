import { useEffect, useState } from 'react'
import axios from 'axios'

export default function CategoryButton({categoryView, setCategoryView, questionView, setQuestionView}) {
    const categoriesUrl = 'https://opentdb.com/api_category.php'
    const [category, setCategory] = useState([])

    useEffect(() => {
        axios
            .get(categoriesUrl)
            .then((response) => {
                console.log(response.data.trivia_categories.map((category) => [category.name, category.id]))
                setCategory(response.data.trivia_categories.map((category) => [category.name, category.id]))
                console.log(category)
            })
    }, [])

    return (
        <>
        {category.map((category) => (
        <button className="btn-sm controls" key={category[1]} onClick={() => {setCategoryView(false); setQuestionView(true);}}>{category[0]}</button>
        ))}
        </>
    )
}