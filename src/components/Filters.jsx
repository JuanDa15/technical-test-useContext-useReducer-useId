import { useId } from 'react'
import { products } from './../mocks/products.json'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { filters, setFilters } = useFilters()
  const categories = new Set(products.map(product => product.category))
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    const price = event.target.value
    setFilters(prevState => ({
      ...prevState,
      minPrice: price
    }))
  }

  const handleCategoryChange = (event) => {
    const category = event.target.value
    setFilters(prevState => ({
      ...prevState,
      category
    }))
  }
  return (
    <section className='filters-container'>
      <div>
        <label htmlFor={minPriceFilterId}>Minimun price</label>
        <input
          id={minPriceFilterId}
          type='range'
          min={0}
          max={1000}
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>{filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleCategoryChange}>
          <option value='all'>all</option>
          {
            Array.from(categories.values()).map((category, index) => (
              <option
                key={index}
                value={category}
              >
                {category}
              </option>
            ))
          }
        </select>
      </div>
    </section>
  )
}
