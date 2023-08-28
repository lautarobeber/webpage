import { Link } from "react-router-dom";

function NavBar() {
    //hidden sm:block = por default el div esta escondido, cuando llega al tamaño sm y en adelante, se le agrega un display:block
    return (
      <nav className="bg-slate-900 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="hidden sm:block text-white text-lg font-semibold">
            <span>Logo</span>
          </div>
          <div className="flex space-x-10">
            <Link to='/' className="text-white hover:text-gray-300 hover:border-b-2 hover:border-teal-dark">
              Inicio
            </Link>
            
            <Link to='/products' className="text-white hover:text-gray-300 hover:border-b-2 hover:border-teal-dark">
              Productos
            </Link>
            <Link to='/' className="text-white hover:text-gray-300 hover:border-b-2 hover:border-teal-dark">
              Contacto
            </Link>
          </div>
          <div className="text-white">
            <span>Nombre Tienda</span>
          </div>
        </div>
      </nav>
    );
  }
  
  export default NavBar;