import { useState } from 'react'
export default function QuestionView({categoryView, setCategoryView, questionView, setQuestionView}) {
    
    return (
        <>
        {questionView ? (
            <>
            <div className='question'>
                <p>Ask the question here</p>
                <p>Choices</p>
                <p>Conditional Rendering of correct/incorrect</p>
                <p>Button for next question</p>
            </div>
            </>
        ) : ('else')}
    </>
    
    )
}