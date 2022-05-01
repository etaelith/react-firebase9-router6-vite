import { useContext } from "react";
import { UserContext } from '../context/UserProvider'

const Login = () => {

    const {user, setUser} = useContext(UserContext)

    return (
        <>
            <h1>Login</h1>
            <h2>
                {
                    user ? 'On' : 'Off'
                }
            </h2>
            <button onClick={() => setUser(user === false ? true : false)}>
                {
                    user ? 'LogOut' : 'LogIn'
                }
            </button>
        </>
    )
}

export default Login;