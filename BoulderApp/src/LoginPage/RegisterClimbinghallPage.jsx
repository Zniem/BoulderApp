import {useState} from "react"
import supabase from "../Supabase/supabaseClient.js"
import {Link} from "react-router-dom"

import "./RegisterPage.css"

function RegisterPage(){
    //For making the boulder hall account
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [boulderHallName, setBoulderHallName] = useState("");

    //For error messages
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) =>{
        event.preventDefault();
        setMessage("");

        //Boulder hall signup
        const {data,error} = await supabase.auth.signUp({
            email: email,
            password: password,
            options:{
                data:{
                    boulderHal: true,
                    boulderHallName: boulderHallName
                },
            },
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
        setBoulderHallName("");
    }

    return(
        <div className="registerForm">
        <h1>Register page of Climbing hall</h1>
        <br></br>
        {message && <span>{message}</span>}
        <form onSubmit={handleSubmit} className="formDiv">
            <input 
            onChange={(e) => setBoulderHallName(e.target.value)}
            value={boulderHallName}
            type="boulderHallName" placeholder="Name of Boulder hall"
            required/>
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
        <p>Want to make an user account?</p>
            <Link to="/registerPage">Register an account</Link>
        <p>Already have an account?</p>
            <Link to="/loginPage">Login</Link>
        </div>
    );
}

export default RegisterPage