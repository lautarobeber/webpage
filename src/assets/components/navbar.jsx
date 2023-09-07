import { Link } from "react-router-dom";
import cartIcon from "../../img/carticon.svg";

function NavBar() {
  //hidden sm:block = por default el div esta escondido, cuando llega al tamaño sm y en adelante, se le agrega un display:block
  return (
    <nav className="bg-slate-900 p-4 my-0">
      <div className="container mx-auto flex items-center justify-between">
        <div className="hidden sm:block text-white text-lg font-semibold">
          <span>Logo</span>
        </div>
        <div className="flex space-x-10">
          <Link
            to="/"
            className="text-white hover:text-gray-300 hover:border-b-2 hover:border-teal-dark"
          >
            Inicio
          </Link>

          <Link
            to="/products"
            className="text-white hover:text-gray-300 hover:border-b-2 hover:border-teal-dark"
          >
            Productos
          </Link>
          <Link
            to="/"
            className="text-white  hover:text-gray-300 hover:border-b-2 hover:border-teal-dark"
          >
            Contacto
          </Link>
        </div>
        <div className="absolute right-20">
        <Link to='/login'>
        <button className="text-white">Iniciar Sesion</button>
       </Link>
       <span>///</span>
        <Link to='/register'>
        <button className="text-white">Registrarse</button>
       </Link>

        </div>
       <Link to='/cart' className="">
        <button className="">
          <svg
            width="30px"
            height="30px"
            className="stroke-current text-white stroke-1 hover:stroke-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
             
              
            />
          </svg>
        </button>
       
       </Link>
       
      </div>
    </nav>
  );
}

export default NavBar;
