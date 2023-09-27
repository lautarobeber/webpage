import { createContext, useEffect, useState } from "react";

//consumir contexto
export const FiltersContext = createContext();

//da acceso al contexto desde la app

export function FiltersProvider({ children }) {
  //puedo actualizar el estado desde cualquier parte de la app

  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
