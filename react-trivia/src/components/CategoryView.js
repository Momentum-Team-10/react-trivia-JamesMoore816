import CategoryButton from './CategoryButton'

export default function CategoryView(props) {
    const { categoryList, setCurrentCategory, fetchQuestion } = props

    return (
        <>
            <h3>Please choose a category:</h3>
            <div className='category-buttons'>
                {categoryList.map((category) => (
                    <>
                        <CategoryButton name={category.name} key={category.index} id={category.id} setCurrentCategory={setCurrentCategory} fetchQuestion={fetchQuestion} {...props}></CategoryButton>
                    </>
                ))}
            </div>
        </>
    )
}