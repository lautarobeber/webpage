import { useForm } from "react-hook-form"
import { useProducts } from "../../hooks/useProducts";

export default function AddProduct() {
    const { register,reset, handleSubmit, formState: {
        errors
      }} = useForm();
      const {addProduct} = useProducts()

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
        <form encType =" multipart/form-data "  onSubmit={handleSubmit( async (data) =>{
           const formData = new FormData();
           formData.append('name', data.name);
           formData.append('category', data.category);
           formData.append('price', data.price);
           formData.append('desc', data.desc);
           formData.append('stock', data.stock);
           formData.append('src', data.src[0]);
         
        
          addProduct(formData)
          reset();
     })}>
          <input
            type="text"
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            {...register("name", { required: true })}
            placeholder="Nombre"
            required
          />

          <select
            type="select"
            {...register("category", { required: true })}
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            required
          >
            <option value="" >
              Selecciona una categoría
            </option>
            <option value="remeras">Remeras</option>
            <option value="pantalones">Pantalones</option>
            <option value="zapatillas">Zapatillas</option>
            <option value="gorras">Gorras</option>
          </select>

          <input
          {...register("price", { required: true })}
            type="text"
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            placeholder="Precio"
          />
          <input
          {...register("desc", { required: true })}
            type="text"
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            placeholder="Descripcion"
          />
          <input
            type="file"
            {...register("src", { required: true })}
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            placeholder="Contraseña"
          />
          <label className="flex items-center mb-6">
            <input
            {...register("stock", { required: true })}
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
