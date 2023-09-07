import { useFilter } from "../../hooks/useFilter";
import { useCart } from "../../hooks/useCart";


function ListProducts() {

    const { filteredProducts } = useFilter();
    
    const {addToCart, clearCart } = useCart()
    

    
    

    
  
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <div key={product.id}>
            <a href="#" className="group" >
              <li
                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
                key={product.id}
              >
                <img
                  className="h-full w-full  group-hover:opacity-75"
                  src={product.thumbnail}
                  alt={product.title}
                />
              </li>
            </a>
              <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                ${product.price}
              </p>
            <button type="submit" onClick={() => addToCart(product)}>
              Agregar al Carrito
            </button>
            </div>
            
          ))}
        </ul>
      </div>
    );
  }

  export default ListProducts;