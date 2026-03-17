import supabase from "../Supabase/supabaseClient.js"
import {useEffect, useState } from "react"

import "./ProfilePage.css"
function MainPage(){
    const [name, setName] = useState("");
    const [dateSignUp, setDateSignUp] = useState("");

    useEffect(() => {
        const fetchUserData = async () => {
            const session = await supabase.auth.getSession();
            setName(session.data.session.user.email);
            setDateSignUp(session.data.session.user.created_at);
        };
        fetchUserData();
    }, []);


    return(
        <div className="profile_page">
            <h1>Profile page</h1>
            <p>Username: {name}</p>
            <p>Email: {name}</p>
            <p>Aangemeld op: {dateSignUp.toString().substring(0,10)}</p>
            <br></br>
            <p>Stats:</p>
            <p>Hoogst geklommen route:</p>
            <p>Gemiddelde graad geklommen route:</p>
            <p>Aantal geklommen routes:</p>
        </div>
    );

}

export default MainPage