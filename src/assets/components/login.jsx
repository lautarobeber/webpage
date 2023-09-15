import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, isAuthenticated, authErrors } = useAuth();

  const navigate = useNavigate();


  useEffect(() =>{
      if(isAuthenticated) navigate("/products")
  }, [isAuthenticated])
  
  return (
    <div className="max-w-[280px] mx-auto">
      <div className="flex flex-col items-center mt-[10vh]">
        <h2 className="mb-5 text-gray-900 font-mono font-bold text-xl">
          Iniciar sesion
        </h2>
        {
    authErrors !== null && authErrors.map((error, i) => 
   ( <p key={i} style={{ color: "red" }}>{error}</p>)
)
}
        <form onSubmit={handleSubmit( async (values) =>{
         
            login(values)
        })}>
          <input
            type="email"
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500">Email is required</p>
          )}
          <input
            type="password"
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            {...register("password", { required: true })}
            placeholder="Contraseña"
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}

          <button
            type="submit"
            className="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full "
            
          >
            Iniciar Sesion
          </button>
        </form>
        <p className="text-center mt-3 text-[14px]">
          Aun no tenes cuenta?<br></br>
          <Link to='/register' className="text-blue-500 hover:underline">
            
            Registrate gratis!

          </Link>
          
        </p>
      </div>
    </div>
  );
}

export default Login;
