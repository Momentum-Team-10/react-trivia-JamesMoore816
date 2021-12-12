import he from 'he'

export default function AnswerButton(props) {
    const { answer, checkAnswer, setQuestionAnswered } = props

    return (
    <button className="answer-button" onClick={() => { checkAnswer(answer); setQuestionAnswered(true); }}>{he.decode(answer)}</button>
    )
}