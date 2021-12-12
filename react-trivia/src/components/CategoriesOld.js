import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Categories() {
    const categoriesUrl = 'https://opentdb.com/api_category.php'
    const [categories, setCategories] = useState([])


    useEffect(() => {
        axios
            .get(categoriesUrl)
            .then((response) => {
                console.log(response.data)
                setCategories(response.data.trivia_categories.map((category) => category.name))
            })
    }, [])

    return (
        <div className='categoryList'>
            {categories.map((name, index) => (
                <button className='categoryButton' key={index}>
                    {name} {index + 9}
                </button>
            ))}
        </div>
        
    )
    }

// export default function Categories() {
//     const [categories, setCategories] = useState([])


//     useEffect(() => {
//         axios
//             .get(
//                 'https://opentdb.com/api_category.php'
//             )
//             .then((response) => {
                
//                 setCategories(response.data.trivia_categories.map((category) => category.name))
//             })
//     }, [])

//     return (
//         <div className='categoryList'>
//             {categories.map((name, index) => (
//                 <p className='category' key={index}>
//                     {name} {index}
//                 </p>
//             ))}
//         </div>
        
//     )
//     }

// The below uses id instead of name for categories
    // export default function Categories() {
    //     const [categories, setCategories] = useState([])
    
    
    //     useEffect(() => {
    //         axios
    //             .get(
    //                 'https://opentdb.com/api_category.php'
    //             )
    //             .then((response) => {
    //                 setCategories(response.data.trivia_categories.map((category) => category.id))
    //             })
    //     }, [])
    
    //     return (
    //         <div className='categoryList'>
    //             {categories.map((id, index) => (
    //                 <p className='category' key={index}>
    //                     {id} {index}
    //                 </p>
    //             ))}
    //         </div>
            
    //     )
    //     }