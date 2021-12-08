import { useState } from 'react'
import CategoryButton from './CategoryButton'

export default function CategoryView({categoryView, setCategoryView, questionView, setQuestionView}) {

    return (
        <>
        {categoryView ? (
            <>
        <h2>Please select a category:</h2>
        <div className='category-buttons'>
            <CategoryButton categoryView={categoryView} setCategoryView={setCategoryView} questionView={questionView} setQuestionView={setQuestionView} />
        </div>
        </>
        ) : ("")}
        </>
    )
}