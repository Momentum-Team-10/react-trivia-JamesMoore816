import CategoryButton from './CategoryButton'

export default function CategoryView(props) {
    const { categoryList, setCurrentCategory, fetchQuestion } = props

    return (
        <>
    {categoryList.map((category) => (
        <div className='category-buttons'>
            <CategoryButton name={category.name} key={category.index} id={category.id} setCurrentCategory={setCurrentCategory} fetchQuestion={fetchQuestion} {...props}></CategoryButton>
        </div>
      ))}
      </>
    )
}