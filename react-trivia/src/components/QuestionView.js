import PlayQuestion from "./PlayQuestion"

export default function QuestionView({categoryView, setCategoryView, questionView, setQuestionView}) {
    
    return (
        <>
        {questionView ? (
            <>
            <PlayQuestion></PlayQuestion>
            </>
        ) : ('question view set to false')}
    </>
    
    )
}