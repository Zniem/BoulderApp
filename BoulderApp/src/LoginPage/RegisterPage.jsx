import {useState} from "react"
import supabase from "./supabaseClient.js"
import {Link} from "react-router-dom"

import "./RegisterPage.css"

function RegisterPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    
    const handleSubmit = async (event) =>{
        event.preventDefault();
        setMessage("");

        const {data,error} = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if(error){
            setMessage(error.message);
            return;
        }

        if(data){
            setMessage("User account created");
        }
        
        setEmail("");
        setPassword("");
    }

    return(
        <div className="registerForm">
        <h1>This is the register page</h1>
        <br></br>
        {message && <span>{message}</span>}
        <form onSubmit={handleSubmit}>
            <input 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email" placeholder="Email"
            required/>
            <input 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password" placeholder="Password"
            required/>
            <button type="submit">Create Account</button>
        </form>
        <span>Already have an account?</span>
        <Link to="/loginPage">Login</Link>
        </div>
    );
}

export default RegisterPage