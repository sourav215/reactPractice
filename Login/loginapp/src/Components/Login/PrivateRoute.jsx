import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginThunkAction } from "../Redux/Login/loginAction";

function PrivateRoute ({children}) {


    const { isAuth } = useSelector((store) => store);
    useEffect(()=>{
        
    },[]);

    
    if(!isAuth) {
        return <Navigate to={"/login"}/>
    }
    return children;

}
export default PrivateRoute;