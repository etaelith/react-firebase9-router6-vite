import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";

const Register = () => {

    const [email, setEmail] = useState('etaelith@test.com')
    const [password, setPassword] = useState('etaelith@test.com')

    const {registerUser} = useContext(UserContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(`Testing, email: ${email} password: ${password}`)
        try {
            await registerUser(email, password)
            console.log('user created') 
        } catch (error) {
            console.log(error.code)
        }
    }
    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Input email"  
                    value={email} 
                    onChange={ e => setEmail(e.target.value)}/>
                <input 
                    type="password" 
                    placeholder="insert password" 
                    value={password} 
                    onChange={ e => setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default Register;