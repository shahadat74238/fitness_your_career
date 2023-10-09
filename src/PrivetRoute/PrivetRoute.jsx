/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <div>
            <h1>Loading data.</h1>
        </div>
    }
    if(user){
        return children;
    }

    return (
        <Navigate state={location.pathname} to="/login">
            
        </Navigate>
    );
};

export default PrivetRoute;