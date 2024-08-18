import { categories } from '../assets/data.js'

const CategorySection = ({category, setCategory}) => {
  return (
    <section className='max_padd_container py-16 xl:py-20' id='shop'>
      <div className='flex items-start gap-6 flex-wrap'>
        {categories.map((item) => (
          <div
          onClick={() => setCategory(prev=>prev===item.name? 'All' :item.name)}
            id={item.name}
            key={item.name}
            className={`py-10 px-32 rounded-3xl text-center cursor-pointer ${category===item.name? 'bg-[#ffd873]' : 'bg-primary'} bg-gray-10`}
          >
            <img src={item.image} alt='categoryImage' height={44} width={44}/>
            <h4 className='mt-6 medium-18'>{item.name}</h4>
          </div>

        ))}
      </div>
    </section>
  )
}

export default CategorySection