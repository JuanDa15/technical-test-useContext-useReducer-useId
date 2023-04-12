import { createContext, useState } from 'react'
// Crear el contexto
// Este se tiene que consumir
export const FiltersContext = createContext()
// Crear el provider, para proveer el contexto
// Este nos provee de acceso al contexto
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
