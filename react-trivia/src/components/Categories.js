import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Categories() {
    const [categories, setCategories] = useState([])


    useEffect(() => {
        console.log('it works!')
        axios
            .get(
                'https://opentdb.com/api_category.php'
            )
            .then((response) => {
                setCategories(response.data.trivia_categories.map((category) => category.name))
            })
    }, [])

    return (
        <ul className='categoryList'>
            {categories.map((name, index) => (
                <li className='category' key={index}>
                    {name}
                </li>
            ))}
        </ul>
        
    )
    }