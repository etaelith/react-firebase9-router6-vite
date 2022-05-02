import { useContext, useState } from "react";
import { UserContext } from '../context/UserProvider'
import {useNavigate} from "react-router-dom"
const Login = () => {

    const [email, setEmail] = useState('etaelith@test.com')
    const [password, setPassword] = useState('etaelith@test.com')


    const {loginUser} = useContext(UserContext);
    const navegate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(`Testing, email: ${email} password: ${password}`)
        try {
            await loginUser(email, password)    
            console.log('User loged')
            navegate("")
        } catch (error) {
            console.log(error.code)
        }
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Input email"  
                    value={email} 
                    onChange={ e => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="insert password" 
                    value={password} 
                    onChange={ e => setPassword(e.target.value)}
                />
                <button type="submit">LogIn</button>
            </form>
        </>
    )
}

export default Login;