import { useFilter } from "../../hooks/useFilter";
import { useCart } from "../../hooks/useCart";
import { useProducts } from "../../hooks/useProducts";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductsRequest } from "../../api/product";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import  axios  from "axios";
import Order from "./order";


function Product () {
    const { id } = useParams()
    
    const {products} = useProducts()
    /* const [preferenceId, setPreferenceId] = useState(null); */
    const navigate = useNavigate();

   

    
    const filteredProduct = products.filter(product => product._id === id)
    
    if (filteredProduct.length === 0) {
      return <div>Cargando productos...</div>;
    }
    
    const handleComprarClick = () => {
      // Redirige al usuario a la página de compra y pasa el ID del producto como parámetro
      navigate(`/order?id=${id}&nombre=${filteredProduct[0].name}&price=${filteredProduct[0].price}`);
    };
    /* initMercadoPago("TEST-daeabcc2-da17-4b7d-a3ea-743200111ae6");
  
    const createPreference = async (product) => {
      try {
        const response = await axios.post("http://localhost:4000/api/create-order", {
          desc: product.name,
          price: product.price,
          quantity: 1,
          currency_id: "ARS",
        });
  
        const { id } = response.data;
        return id;
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleBuy = async (product) => {
      const id = await createPreference(product);
      if (id) {

        setPreferenceId(id);
      }
    };
  
  
   */
   
  
  
  
    return(
        <>
      <div className="flex font-sans ml-32 mt-32 border border-solid border-gray-300">
    <div className="flex-none w-48 relative">
      <img src={filteredProduct[0].src} alt="" className="absolute inset-0 w-full h-full object-cover" />
    </div>
    <form className="flex-auto p-6">
      <div className="flex flex-wrap">
        <h1 className="flex-auto text-lg font-semibold text-slate-900">
          {filteredProduct[0].name}
        </h1>
        
        <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
          En stock
        </div>
      </div>
      <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
        <div className="space-x-2 flex text-sm">
          <label>
            <input className="sr-only peer" name="size" type="radio" value="xs" />
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              XS
            </div>
          </label>
          <label>
            <input className="sr-only peer" name="size" type="radio" value="s" />
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              S
            </div>
          </label>
          <label>
            <input className="sr-only peer" name="size" type="radio" value="m" />
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              M
            </div>
          </label>
          <label>
            <input className="sr-only peer" name="size" type="radio" value="l" />
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              L
            </div>
          </label>
          <label>
            <input className="sr-only peer" name="size" type="radio" value="xl" />
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              XL
            </div>
          </label>
        </div>
      </div>
      <div className="flex space-x-4 mb-6 text-sm font-medium">
        <div className="flex-auto flex space-x-4">
        <button className='ml-12 text-red-500' type='button' onClick={handleComprarClick}/*  onClick={()=>handleBuy(filteredProduct[0])} */  >
                
                Comprar
              </button>
          <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
            Añadir al carrito
          </button>
        </div>
        
      {/*   {preferenceId &&<button  type="button"
  onClick={(e) => {
    e.preventDefault(); // Evita la recarga de la página
    // Tu lógica para redirigir al pago aquí

  }}>
    <Wallet initialization={{ preferenceId }} />
    </button >    } */}
        
      </div>
      <p className="text-sm text-green-500">
        Envio gratis
      </p>
    </form>
  </div>
   {/*  {showform && <Order/ >} */}
   </>
    )
  }

  export default Product;