import { useCart } from "../../hooks/useCart";


export const CartProduct = ({product}) =>{
    const { cart, clearCart, removeFromCart } = useCart();
return(

<li className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4  flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href="#">{product.title}</a>
                      </h3>
                      <p className="ml-4">${product.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Quantity: {product.quantity}</p>

                    <div className="flex">
                      <button
                      onClick={()=>removeFromCart(product)}
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500 "

                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </li>

)

}