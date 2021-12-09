import PlayQuestion from "./PlayQuestion"

export default function QuestionView({categoryView, setCategoryView, questionView, setQuestionView}) {
    
    return (
        <>
        {questionView ? (
            <>
            <h2>Category: XYZ</h2>
            <PlayQuestion></PlayQuestion>
            </>
        ) : ('question view set to false')}
    </>
    
    )
}