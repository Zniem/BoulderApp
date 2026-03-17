import {useState} from "react"
import supabase from "../Supabase/supabaseClient.js"
import {Link, useNavigate} from "react-router-dom"

import "./LoginPage.css"

function LoginPage(){
    //navigation Constant
    const navigate = useNavigate();

    //Login in user or boulder hall
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //for errot messages
    const [message, setMessage] = useState("");
    
    //Login things
    const handleSubmit = async (event) =>{
        event.preventDefault();
        setMessage("");

        const {data,error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if(error){
            setMessage(error.message);
            setEmail("");
            setPassword("");
            return;
        }

        if(data){
            const {data: {user}} = await supabase.auth.getUser();
                if(user?.user_metadata.boulderHal === true){
                    navigate("/adminDashboard");
                    location.reload(true);
                }else if (user?.user_metadata.boulderHal === false){
                    navigate("/dashboard");
                    location.reload(true);
                return null;
        }
    }
    }
    return(
        <div className="loginForm">
        <h1>Login page</h1>
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
            <button type="submit">Log in</button>
        </form>
        <span>Dont have an account yet?</span>
            <Link to="/registerPage">Register</Link>
        </div>
    );
}

export default LoginPage