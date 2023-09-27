function Order() {
  return (
    <>
    <div>
        <h1 className="text-center text-2xl font-bold mt-4">ORDEN DE COMPRA</h1>
    </div>
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-24  flex flex-col my-2">
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
            placeholder="Email@masemail.com"
          />
        </div>
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
            placeholder="Albuquerque"
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
            >
                
                <option value="1">BUENOS AIRES</option>
                <option value="2">CATAMARCA</option>
                <option value="5">CHACO</option>
                <option value="6">CHUBUT</option>
                <option value="50">CIUDAD AUTONOMA DE Bs As</option>
                <option value="3">CORDOBA</option>
                <option value="4">CORRIENTES</option>
                <option value="7">ENTRE RIOS</option>
                <option value="8">FORMOSA</option>
                <option value="9">JUJUY</option>
                <option value="10">LA PAMPA</option>
                <option value="11">LA RIOJA</option>
                <option value="12">MENDOZA</option>
                <option value="13">MISIONES</option>
                <option value="14">NEUQUEN</option>
                <option value="15">RIO NEGRO</option>
                <option value="16">SALTA</option>
                <option value="17">SAN LUIS</option>
                <option value="19">SANTA CRUZ</option>
                <option value="20">SANTA FE</option>
                <option value="21">SANTIAGO DEL ESTERO</option>
                <option value="22">TIERRA DEL FUEGO</option>
                <option value="23">TUCUMAN</option>
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
            placeholder="Codigo postal"
          />
        </div>
      </div>
      <button
            type="submit"
            
            className="bg-black mt-12 hover:bg-green-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full "
          >
            COMPRAR!
          </button>
    </div>

    </>
    
  );
}

export default Order;
