import RouteCard from "./RouteCard.jsx"
import {useEffect, useState } from "react"
import supabase from "../Supabase/supabaseClient.js"

import "./AdminDashboardPage.css"

function AdminDashboardPage(){
    const [climbingRoutes, setClimbingRoutes] = useState([]);
    const [newRouteName, setNewRouteName] = useState("");
    const [newRouteGrade, setNewRouteGrade] = useState("");


    const addClimbingRoute = async () =>{
        const newRoute = {
            grade:newRouteGrade,
            routeName:newRouteName, 
        };
        const {data, error} = await supabase
        .from("climbingRoutes")
        .insert([newRoute])
        .select();
        if(error){
            console.log("Error adding route: " + error.message);
            return;
        }else{
            setClimbingRoutes((prev) => [...prev, ...data])
            setNewRouteName("");
            setNewRouteGrade("");
        }

    };  
    useEffect(()=>{
        getClimbingRoutes();
    }, []);

    async function getClimbingRoutes() {
    const { data } = await supabase.from("climbingRoutes").select();
    setClimbingRoutes(data);
    }

    return(
    <div className="admin_dashboard">
    <h1>Admin Dashboard page</h1>
    <input type="text" placeholder="name" value={newRouteName} onChange={(e) => setNewRouteName(e.target.value)}></input>
    <input type="text" placeholder="grade" value={newRouteGrade} onChange={(e) => setNewRouteGrade(e.target.value)}></input>
        <button onClick={addClimbingRoute}>Add route</button>

        <ul  className="routes">
            {climbingRoutes.map((climbingRoute) => (
                <RouteCard id={climbingRoute.id} name={climbingRoute.routeName} grade={climbingRoute.grade} description={climbingRoute.description}></RouteCard>
            ))}
        </ul>  
    </div>
    );
}

export default AdminDashboardPage