import {Link} from "react-router-dom";
import {useEffect, useState } from "react"
import supabase from "../LoginPage/supabaseClient.js"

import "./topNavBar.css"

function TopNavBar(){
    const [metadata, setMetadata] = useState(null);
    
    useEffect(() => {
        LoadMetadata();
    }, []);

    async function LoadMetadata(){
        const {data: {user}} = await supabase.auth.getUser();
        setMetadata(user.email);
    }
        
    async function LogOut(){
        const {error} = await supabase.auth.signOut();
        setMetadata(null);
    }

    return(
        <div className="top_bar">
            <h2>Boulder app</h2>
            <div className="right_side">
            <Link to={`/`}>Home</Link>
            <Link to={`/dashboard`}>Dashboard</Link>
            <Link to={`/climbed`}>Climbed</Link>
            <Link to={`/loginPage`}>Log In</Link>
            <Link to={`/registerPage`}>Register</Link>
            <Link to={`/adminDashboard`}>AdminDashboard</Link>
            <Link>{metadata}</Link>
            <button onClick={LogOut}>log uit</button>
            </div>
        </div>
    );
}

export default TopNavBar