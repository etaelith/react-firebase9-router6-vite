import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { UserContext } from "../context/UserProvider"

const Navbar = () => {

    const {user, logOutUser} = useContext(UserContext)

    const handleLogOut = async () => {
        try {
            logOutUser()
        } catch (error) {
            console.log(error.code)
        }
    }


    return (
        <div>
            {
                user ? (
                    <>
                        <NavLink to="">Home</NavLink>
                        <button onClick={handleLogOut}>LogOut</button>
                    </>
                ) : (
                    <>
                        <NavLink to="/login" onClick={() => setUser(true)}>Login</NavLink>
                        <NavLink to="/register" onClick={() => setUser(true)}>Register</NavLink>
                    </>
                )
            }
        </div>
    )
}

export default Navbar;