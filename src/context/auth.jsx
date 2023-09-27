import { useState, createContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";


//da acceso al contexto desde la app
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  //puedo actualizar el estado desde cualquier parte de la app
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authErrors, setAuthErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  //datos del form van en user
  const signup = async (user) => {
    try {
      //request al servidor backend
      const res = await registerRequest(user);
      console.log(res.data);
      //guardar la respuesta del servidor
      setUser(res.data);
      setIsAuthenticated(true);
     
    } catch (error) {
      console.log(error.response);
      setAuthErrors(error.response.data);
    }
  };

  const login = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res.data);
      setIsAuthenticated(true);
      console.log(isAuthenticated)
      
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setAuthErrors(error.response.data);
      }
      setAuthErrors([error.response.data.message]);
    }
  };
  
  

  useEffect(() => {
    if (authErrors.length > 0) {
      const timer = setTimeout(() => setAuthErrors([]), 5000);
      return () => clearTimeout(timer);
    }
  }, [authErrors]);

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        setUser(null);
        return;
      }
      try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res.data){
          setIsAuthenticated(false);
          setLoading(false);
          return;
        } 

        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signup,
        isAuthenticated,
        authErrors,
        login,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
