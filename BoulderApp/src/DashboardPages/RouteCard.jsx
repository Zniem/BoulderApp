import {Link} from "react-router-dom";
import './routecard.css'
import supabase from "../Supabase/supabaseClient.js"
import {getCurrentUserEmail} from "../Supabase/supabaseHelper.js"


function RouteCard(props){
    const AddToLikeList = async (id) =>{
        const {data: likedData} = await  supabase.from("climbingRoutes").select("likedBy").eq("id", id).single();
        const email = await getCurrentUserEmail();

        const currentLikes = likedData.likedBy ?? [];
        if(currentLikes.includes(email)) return;

        const updatedLikes = [...currentLikes, email];


        const {data, error} = await supabase.from("climbingRoutes").update({likedBy: updatedLikes}).eq("id", id);

        if(error){
            console.log("Error updating like list");
        }
    }

    return(
        <div className="card_container">
            <h1>{props.name}</h1>
            <p>Grade: {props.grade}</p>
            <Link to={`/details/${props.id}`}
                state={{description: props.description}}>
                Route in detail
            </Link>
            <br></br>
            <button onClick={() => AddToLikeList(props.id)}>Like the route</button>
        </div>
    );
}

export default RouteCard