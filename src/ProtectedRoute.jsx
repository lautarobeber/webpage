import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./hooks/useAuth"

export function ProtectedRoute() {

    const {user, loading, isAuthenticated} = useAuth()
    console.log(user, isAuthenticated);

    if(loading) return <h1>Loading...</h1>
    if(!loading && !isAuthenticated) return <Navigate to='/login' replace />



    return (
        <Outlet/>
    )
}