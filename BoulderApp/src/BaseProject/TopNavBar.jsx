import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState } from "react"
import supabase from "../Supabase/supabaseClient.js"

import "./topNavBar.css"

function TopNavBar(){
    const navigate = useNavigate();

    const [metadata, setMetadata] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isBoulderhal, setIsBoulderhal] = useState(false);

    useEffect(() => {
        isActiveSession();
    }, []);


    async function isActiveSession(){
        const {data: {session}} = await supabase.auth.getSession();
            if(session){
                setIsLoggedIn(true);
                setMetadata(session.user.email);
                setIsBoulderhal(session.user.user_metadata.boulderHal);
            }    
    }
        
    async function LogOut(){
        const {error} = await supabase.auth.signOut();
        setMetadata(null);
        setIsLoggedIn(false);
        navigate("/");
    }

    return(
        <div className="top_bar">
            <h2>Boulder app</h2>
            <div className="right_side">
            {!isLoggedIn && <Link to={`/`}>Home</Link>}
            {!isLoggedIn && <Link to={`/loginPage`}>Log In</Link>}
            {!isLoggedIn && <Link to={`/registerPage`}>Register</Link>}
            {isLoggedIn && !isBoulderhal && <Link to={`/dashboard`}>Dashboard</Link>}
            {isLoggedIn && isBoulderhal && <Link to={`/adminDashboard`}>AdminDashboard</Link>}
            {isLoggedIn && !isBoulderhal && <Link to={`/climbed`}>Climbed</Link>}
            {isLoggedIn && <Link to="profilePage">{metadata}</Link>}
            {isLoggedIn && <button onClick={LogOut}>log uit</button>}
            </div>
        </div>
    );
}

export default TopNavBar