import RouteCard from "./RouteCard.jsx"
import {createClient} from "@supabase/supabase-js"
import {useEffect, useState } from "react"

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
);

function MainPage(){
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
        {/*Filled with test data for now this is gonna change to an API from a database*/}

        <ul>
            {climbingRoutes.map((climbingRoute) => (
                <RouteCard id={climbingRoute.id} name={climbingRoute.routeName} grade={climbingRoute.grade}></RouteCard>
            ))}
        </ul>
        
        
    </>
    );
}

export default MainPage