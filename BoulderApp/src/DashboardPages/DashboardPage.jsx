import RouteCard from "./RouteCard.jsx"
import {useEffect, useState } from "react"
import supabase from "../Supabase/supabaseClient.js"

import "./dashboardpage.css"

function DashboardPage(){
    const [climbingRoutes, setClimbingRoutes] = useState([]);
    
    useEffect(()=>{
        getClimbingRoutes();
    }, []);

    async function getClimbingRoutes() {
    const { data } = await supabase.from("climbingRoutes").select();
    setClimbingRoutes(data);
    }

    return(
    <div className="dashboard">
    <h1>User Dashboard</h1>
        <ul className="routes">
            {climbingRoutes.map((climbingRoute) => (
                <RouteCard id={climbingRoute.id} name={climbingRoute.routeName} grade={climbingRoute.grade} description={climbingRoute.description}></RouteCard>
            ))}
        </ul>  
    </div>
    );
}

export default DashboardPage