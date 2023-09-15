import { useForm } from "react-hook-form";
import { registerRequest } from "../../api/auth";
import { useAuth } from "../../hooks/useAuth.jsx";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const { register, handleSubmit, formState: {
    errors
  }} = useForm();
  const { signup, isAuthenticated, authErrors  } = useAuth();
  const navigate = useNavigate();


  useEffect(() =>{
      if(isAuthenticated) navigate("/products")
  }, [isAuthenticated])
  return (
    <div className="max-w-[280px] mx-auto">
      <div className="flex flex-col items-center mt-[10vh]">
        <h2 className="mb-5 text-gray-900 font-mono font-bold text-xl">
          Registrar Usuario
        </h2>
        {
    authErrors !== null && authErrors.map((error, i) => 
   ( <p key={i} style={{ color: "red" }}>{error}</p>)
)
}
        <form onSubmit={handleSubmit( async (values) =>{
            signup(values)
        })}>
          <input
            type="text"
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            {...register("username", { required: true })}
            placeholder="Usuario"
          />
          {
            errors.username && <p className='text-red-500'>Username is required</p>
          }
          <input
            type="email"
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            {...register("email", { required: true })}
            placeholder="Email"
          />
           {
            errors.email && <p className='text-red-500'>Email is required</p>
          }
          <input
            type="password"
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            {...register("password", { required: true })}
            placeholder="Contraseña"
          />
           {
            errors.password && <p className='text-red-500'>Password is required</p>
          }
          <button
            type="submit"
            className="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full "
          >
            Registrarme
          </button>
        </form>
        <p className="text-center mt-3 text-[14px]">
          Ya tenes cuenta? <br></br>
          <Link to='/login' className="text-blue-500 hover:underline">
            
            Inicia sesion!

          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
