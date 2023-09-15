import { useForm } from "react-hook-form"

export default function AddProduct() {
    const { register, handleSubmit, formState: {
        errors
      }} = useForm();

      return(
    <div className="max-w-[280px] mx-auto">
      <div className="flex flex-col items-center mt-[10vh]">
        <h2 className="mb-5 text-gray-900 font-mono font-bold text-xl">
          Agregar Producto
        </h2>
        {/*  {
      authErrors !== null && authErrors.map((error, i) => 
     ( <p key={i} style={{ color: "red" }}>{error}</p>)
  )
  } */}
        <form>
          <input
            type="text"
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            placeholder="Nombre"
          />

          <select
            type="select"
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            required
          >
            <option value="" disabled selected>
              Selecciona una categoría
            </option>
            <option value="remeras">Remeras</option>
            <option value="pantalones">Pantalones</option>
            <option value="zapatillas">Zapatillas</option>
            <option value="gorras">Gorras</option>
          </select>

          <input
            type="text"
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            placeholder="Precio"
          />
          <input
            type="text"
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            placeholder="Descripcion"
          />
          <input
            type="file"
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            placeholder="Contraseña"
          />
          <label className="flex items-center mb-6">
            <input
              type="checkbox"
              className="mr-2" // Espacio entre el checkbox y el texto
            />
            Stock disponible
          </label>

          <button
            type="submit"
            className="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full "
          >
            Agregar!
          </button>
        </form>
      </div>
    </div>
  );
}
