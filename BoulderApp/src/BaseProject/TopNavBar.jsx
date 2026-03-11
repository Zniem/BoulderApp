import {Link} from "react-router-dom";
import {useEffect, useState } from "react"
import supabase from "../LoginPage/supabaseClient.js"

import "./topNavBar.css"

function TopNavBar(){
    const [metadata, setMetadata] = useState(null);
    
    // useEffect(() => {
    //     LoadMetadata();
    // }, []);

    // async function LoadMetadata(){
    //     const {data: {user}} = await supabase.auth.getUser();
    //     if(user?.user_metadata.boulderHal === true){
    //         setMetadata("true a maat");

    //     }else if (user?.user_metadata.boulderHal === false){
    //         setMetadata("false a mattie")
    //     }else{
    //         setMetadata("Niemand is logged in")

    //     }
        
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
            <Link to={`/adminDashboard`}>{metadata}</Link>
            <button onClick={LoadMetadata}>Laad</button>
            <button onClick={LogOut}>log uit</button>
            </div>
        </div>
    );
}

export default TopNavBar