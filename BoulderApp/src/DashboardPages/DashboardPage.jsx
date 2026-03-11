import RouteCard from "./RouteCard.jsx"
import {useEffect, useState } from "react"
import supabase from "../LoginPage/supabaseClient.js"


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
    <>
    <h1>User Dashboard</h1>
        <ul  className="div_test">
            {climbingRoutes.map((climbingRoute) => (
                <RouteCard id={climbingRoute.id} name={climbingRoute.routeName} grade={climbingRoute.grade} description={climbingRoute.description}></RouteCard>
            ))}
        </ul>  
    </>
    );
}

export default DashboardPage