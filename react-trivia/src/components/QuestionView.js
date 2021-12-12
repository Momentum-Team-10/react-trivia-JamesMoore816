import he from 'he'

export default function QuestionView(props) {
    const { question, category } = props

    return (
        <>
        <h3>Category: {category}</h3>
        <p>{he.decode(question)}</p>
        </>
    )

}