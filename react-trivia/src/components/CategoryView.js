import { useState } from 'react'
import CategoryButton from './CategoryButton'

export default function CategoryView(props) {
    const [categoryView, setCategoryView] = useState(true)

    return (
        <>
        {categoryView ? (
            <>
        <h2>Please select a category:</h2>
        <div className='category-buttons'>
            <CategoryButton categoryView={categoryView} setCategoryView={setCategoryView} {...props} />
        </div>
        </>
        ) : ("")}
        </>
    )
}