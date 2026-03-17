import RouteCard from "./RouteCard.jsx"
import {createClient} from "@supabase/supabase-js"
import {useEffect, useState } from "react"

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
);

function AdminDashboardPage(){
    const [climbingRoutes, setClimbingRoutes] = useState([]);
    // const [newClimbingRoute, setNewClimbingRoute] = useState([]);
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
            console.log("Eroor adding todo: " + error);
        }else{
            setClimbingRoutes((prev) => [...prev, data])
            setNewRouteName("");
            setNewRouteGrade("");
            location.reload(true);
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
    <>
    <h1>Admin Dashboard page</h1>
    <input type="text" placeholder="name" value={newRouteName} onChange={(e) => setNewRouteName(e.target.value)}></input>
    <input type="text" placeholder="grade" value={newRouteGrade} onChange={(e) => setNewRouteGrade(e.target.value)}></input>
        <button onClick={addClimbingRoute}>Add route</button>

        <ul  className="div_test">
            {climbingRoutes.map((climbingRoute) => (
                <RouteCard id={climbingRoute.id} name={climbingRoute.routeName} grade={climbingRoute.grade} description={climbingRoute.description}></RouteCard>
            ))}
        </ul>  
    </>
    );
}

export default AdminDashboardPage