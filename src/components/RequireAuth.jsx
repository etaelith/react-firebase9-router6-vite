import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const RequireAuth = ({childen}) => {

    const {user} = useContext(UserContext)

    if(!user){
        return <Navigate to="/login"/>
    }
    return childen
}


export default RequireAuth;