export default function CategoryButton(props) {
    const { name, index, id, fetchQuestion, setCurrentCategory } = props

    return (
        <button className='category-button' key={index} onClick={() => { fetchQuestion(id); setCurrentCategory(id); }}>{name}</button>
    )
}