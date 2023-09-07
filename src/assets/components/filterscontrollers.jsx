import { useId } from "react";
import { useFilter } from "../../hooks/useFilter";

export function FiltersControllers() {
  
    const minPriceFilterId = useId();
    const categoryFilterId = useId();
    const { setFilters, filters } = useFilter();
   
  
    const handleMinPrice = (event) => {
     
      setFilters({ ...filters, minPrice: event.target.value });
    };
  
    const handleCategory = (event) => {
      setFilters({ ...filters, category: event.target.value });
    };
  
    return (
      <section className="absolute top-32 left-0">
        <div>
          <label htmlFor={minPriceFilterId}>
            <strong>Precio a partir de </strong>
          </label>
          <input
            type="range"
            id={minPriceFilterId}
            min="0"
            max="1000"
            onChange={handleMinPrice}
            value={filters.minPrice}
          />
          <strong>${filters.minPrice}</strong>
        </div>
  
        <div>
          <label htmlFor={categoryFilterId}>
            <strong>Categoría </strong>
          </label>
          <select id={categoryFilterId} onChange={handleCategory}>
            <option value="all">Todas</option>
            <option value="laptops">Portátiles</option>
            <option value="smartphones">Celulares</option>
          </select>
        </div>
      </section>
    );
  }