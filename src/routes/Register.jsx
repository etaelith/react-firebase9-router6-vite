import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useForm } from 'react-hook-form'
import {useNavigate} from "react-router-dom"

const Register = () => {

    const navegate = useNavigate();
    const { registerUser } = useContext(UserContext)

    const { 
        register, 
        handleSubmit, 
        formState: {errors},
        getValues,
        setError,
    } = useForm()

    const onSubmit = async ({email, password}) => {
        try {
            await registerUser(email, password)
            console.log('user created')
            navegate("/")
        } catch (error) {
            switch(error.code){
                case "auth/email-already-in-use":
                    setError("email", {
                        message: "User exist"
                    })
                    break;
                default:
                    console.log('error on server')
            }
        }
    } 


    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    type="email" 
                    placeholder="Input email"
                    {...register ("email", {
                        required:{
                            value: true,
                            message: "Required complete this field"
                        },
                        pattern: {
                            value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
                            message: "Complete with email format"
                        }
                    })}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                <input 
                    type="password" 
                    placeholder="insert password" 
                    {...register ("password", {minLength:{
                        value : 6,
                        message : "Min 6 characters length"},
                        validate: {
                            trim: (v) => {
                                if(!v.trim()){
                                    return "do not leave empty spaces";
                                } else {
                                    return true;
                                }
                            }
                        }   
                    })}
                />
                    {errors.password && <span>{errors.password.message}</span>}
                <input 
                    type="password" 
                    placeholder="insert password" 
                    {...register ("checkPassword",{
                        validate: {
                            equals: v => v === getValues("password") || 'Passwords not match',
                            /* message: 'do not match' */
                        }
                    })}
                />
                    {
                        errors.checkPassword && <span>{errors.checkPassword.message}</span>
                    }
                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default Register;