import {Link} from "react-router-dom";
import './routecard.css'
import supabase from "../LoginPage/supabaseClient.js"


function RouteCard(props){
    const AddToLikeList = async (id) =>{
        const {data: likedData} = await  supabase.from("climbingRoutes").select("likedBy").eq("id", id).single();
        const {data: {session}} = await supabase.auth.getSession();

        const currentLikes = likedData.likedBy ?? [];
        if(currentLikes.includes(session.user.email)) return;

        const updatedLikes = [...currentLikes, session.user.email];


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