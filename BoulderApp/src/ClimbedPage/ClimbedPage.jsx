import {useState, useEffect} from "react";
import supabase from "../Supabase/supabaseClient.js"

function ClimbedPage(){
    const [climbingRoutes, setClimbingRoutes] = useState([]);
    const [routesClimbed, setRoutesClimbed] = useState([]);
    const [email, setEmail] = useState("");
    
    useEffect(()=>{
        getClimbingRoutes();
        getUserEmail();
    }, []);

    useEffect(() => {
        if (email && climbingRoutes.length > 0) {
            const climbed = climbingRoutes.filter((route) =>
            (route.likedBy || []).includes(email)
        );
            setRoutesClimbed(climbed);
        }
    }, [email, climbingRoutes]);


    async function getClimbingRoutes() {
        const { data } = await supabase.from("climbingRoutes").select();
        setClimbingRoutes(data);
    }

    async function getUserEmail(){
        const {data: {session}} = await supabase.auth.getSession();
            setEmail(session.user.email);
    }
        
    
    return(
        <div>
        <h1>Routes you have climbed:</h1>
        {routesClimbed.map((route) => (
            <p>{route.routeName}</p>
        ))}
        </div>
    );
}

export default ClimbedPage