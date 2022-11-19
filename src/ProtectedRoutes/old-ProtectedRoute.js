import { Route, Navigate } from 'react-router-dom'

export default function PrivateRoutes () {
    let auth = localStorage.getItem("token")
    if (!auth){
       return(<Navigate to="/"/>) 
    }else {
        return(<Outlet/>)
    }

}

