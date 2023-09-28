import { useForm } from "react-hook-form";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios";
import {  useParams, useLocation  } from "react-router-dom";
import { useState } from "react";




function Order() {

   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [preferenceId, setPreferenceId] = useState(null);
  const [isGeneratingPayment, setIsGeneratingPayment] = useState(false);

  


  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Accede a los parámetros de consulta
  const id_product = searchParams.get('id');
  const nombre = searchParams.get('nombre');
  const price = searchParams.get('price');

  

  
  initMercadoPago("TEST-daeabcc2-da17-4b7d-a3ea-743200111ae6");

  console.log()
  
   
  
   /*  const handleBuy = async (product) => {
      const id = await createPreference(product);
      if (id) {

        setPreferenceId(id);
      }
    }; */
  
  return (
    <>
     
    <form onSubmit={handleSubmit( async (values) =>{
          console.log(values)
          try {
            const response = await axios.post("http://localhost:4000/api/create-order", {
              id: id_product,
              desc: nombre,
              price: price,
              quantity: 1,
              currency_id: "ARS",
              payer: {
                name_user: values.name,
                surname_user: values.surname,
                email: values.email,
               /*  phone: values.phone, */
                city: values.city,
                province: values.province,
                adress: values.adress,
                zip: values.zip
            }
          }
            );
            console.log(response)
            const { id } = await response.data;
            console.log(id) 
           if(id){
            setPreferenceId(id)
            setIsGeneratingPayment(true)
           }
           
            
          } catch (error) {
            console.log(error);
          }
        ;

          
     })} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4   flex flex-col my-2">
    
        <h1 className="text-center text-2xl font-bold mb-24 ">ORDEN DE COMPRA</h1>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Nombre
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            id="grid-first-name"
            type="text"
            {...register("name", { required: true })}
            placeholder="Lionel"
          />
          <p className="text-red text-xs italic">
            Es importante que rellenes todos los campos.
          </p>
        </div>
        <div className="md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="grid-last-name"
           
          >
            Apellido
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="grid-last-name"
            type="text"
            {...register("surname", { required: true })}
            placeholder="Messi"
          />
        </div>
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-full px-3">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
            id="grid-password"
            type="email"
            {...register("email", { required: true })}
            placeholder="Email@masemail.com"
          />
        </div>
       {/*  <div className="md:w-full px-3">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Celular / Telefono
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
            id="grid-phone"
            type="number"
            {...register("phone", { required: true })}
            placeholder="Ingrese un numero de contacto"
          />
        </div> */}
      </div>
      <div className="-mx-3 md:flex mb-2">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="grid-city"
          />
          Ciudad
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="grid-city"
            type="text"
            {...register("city", { required: true })}
            placeholder="Ciudad"
          />
        </div>
        <div className="md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="grid-state"
          />
          Provincia
          <div className="relative">
            <select
              className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
              id="grid-state"
              {...register("province", { required: true })}
            >
                
                <option value="BUENOS AIRES">BUENOS AIRES</option>
                <option value="CATAMARCA">CATAMARCA</option>
                <option value="CHACO">CHACO</option>
                <option value="CHUBUT">CHUBUT</option>
                <option value="C.A.B.A">C.A.B.A</option>
                <option value="CORDOBA">CORDOBA</option>
                <option value="CORRIENTES">CORRIENTES</option>
                <option value="ENTRE RIOS">ENTRE RIOS</option>
                <option value="FORMOSA">FORMOSA</option>
                <option value="JUJUY">JUJUY</option>
                <option value="LA PAMPA">LA PAMPA</option>
                <option value="LA RIOJA">LA RIOJA</option>
                <option value="MENDOZA">MENDOZA</option>
                <option value="MISIONES">MISIONES</option>
                <option value="NEUQUEN">NEUQUEN</option>
                <option value="RIO NEGRO">RIO NEGRO</option>
                <option value="SALTA">SALTA</option>
                <option value="SAN LUIS">SAN LUIS</option>
                <option value="SAN JUAN">SAN JUAN</option>
                <option value="SANTA CRUZ">SANTA CRUZ</option>
                <option value="SANTA FE">SANTA FE</option>
                <option value="SANTIAGO DEL ESTERO">SANTIAGO DEL ESTERO</option>
                <option value="TIERRA DEL FUEGO">TIERRA DEL FUEGO</option>
                <option value="TUCUMAN">TUCUMAN</option>

              </select>
    
            <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="grid-zip"
          >
            Codigo postal
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="grid-zip"
            type="text"
            {...register("zip", { required: true })}
            placeholder="Codigo postal"
          />
        </div>
        <div className="md:w-full px-3">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Direccion
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
            id="grid-adress"
            type="text"
            {...register("adress", { required: true })}
            placeholder="Direccion 432"
          />
        </div>
      </div>
      <button
            type="submit"
            disabled={isGeneratingPayment}
            className={`bg-black mt-12 hover:bg-green-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full `}
          >
            {isGeneratingPayment ? 'Generando link de pago..' : 'COMPRAR!'}
          </button>
         {preferenceId && <Wallet initialization={{ preferenceId }} />}
    </form>

    </>
    
  );
}

export default Order;
