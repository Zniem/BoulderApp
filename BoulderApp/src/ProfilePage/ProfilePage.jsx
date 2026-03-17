import supabase from "../Supabase/supabaseClient.js"
import {useEffect, useState } from "react"

import "./ProfilePage.css"
function MainPage(){
    const [name, setName] = useState("");

    useEffect(() => {
        const fetchUserData = async () => {
            const data = await supabase.auth.getSession();
            setName(data.data.session.user.email);

        };
        fetchUserData();
    }, []);


    return(
        <div className="profile_page">
            <h1>Profile page</h1>
            <p>Username: {name}</p>
            <p>Email: {name}</p>
            <p>Aangemeld op: </p>
            <br></br>
            <p>Stats:</p>
            <p>Hoogst geklommen route:</p>
            <p>Gemiddelde graad geklommen route:</p>
            <p>Aantal geklommen routes:</p>
        </div>
    );

}

export default MainPage