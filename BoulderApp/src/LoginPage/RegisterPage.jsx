import {useState} from "react"
import supabase from "../Supabase/supabaseClient.js"
import {Link} from "react-router-dom"

import "./RegisterPage.css"

function RegisterPage(){
    //For making the user account
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //For error messages
    const [message, setMessage] = useState("");

    // user signup
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
        <h1>Register page</h1>
        <br></br>
        {message && <span>{message}</span>}
        <form onSubmit={handleSubmit} className="formDiv">
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
        <p>Want to register as a Bouldering hall?</p>
            <Link to="/registerClimbingHallPage">Boulder hall register</Link>
        <p>Already have an account?</p>
            <Link to="/loginPage">Login</Link>
        </div>
    );
}

export default RegisterPage