import { useEffect, useState } from 'react'
import axios from 'axios'

export default function CategoryButton({categoryView, setCategoryView, questionView, setQuestionView}) {
    const categoriesUrl = 'https://opentdb.com/api_category.php'
    // const {name, id} = props
    const [category, setCategory] = useState([])

    useEffect(() => {
        axios
            .get(categoriesUrl)
            .then((response) => {
                console.log(response.data)
                setCategory(response.data.trivia_categories.map((category) => category.name))
            })
    }, [])

    return (
        <>
        {category.map((name, index) => (
        <button className="btn-sm controls" key={index+9} onClick={() => {setCategoryView(false); setQuestionView(true);}}>{name} {index}</button>
        
        ))}
        </>
    )
}