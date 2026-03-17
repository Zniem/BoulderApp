import {Link} from "react-router-dom";
import './routecard.css'
import supabase from "../Supabase/supabaseClient.js"
import {getCurrentUserEmail, getUserRank} from "../Supabase/supabaseHelper.js"
import {useEffect, useState } from "react"


function RouteCard(props){
    const [isBoulderhal, setIsBoulderhal] = useState(false);
    const [likedByUser, setLikedByUser] = useState(false);
    
    useEffect(() => {
    const fetchRank = async () => {
        const rank = await getUserRank();
        setIsBoulderhal(rank);
    };
    fetchRank();
    getLikedByUser();
}, [props.id]);

const getLikedByUser = async () => {
    const { data: likedData } = await supabase
        .from("climbingRoutes")
        .select("likedBy")
        .eq("id", props.id)
        .single();

    const email = await getCurrentUserEmail();

    const currentLikes = likedData.likedBy ?? [];
    setLikedByUser(currentLikes.includes(email));
};
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
        if(!error)setLikedByUser(true);
    }

    const RemoveFromLikedList = async (id) =>{
     const { data: likedData } = await supabase
        .from("climbingRoutes")
        .select("likedBy")
        .eq("id", id)
        .single();

    const email = await getCurrentUserEmail();
    const currentLikes = likedData.likedBy ?? [];

    const updatedLikes = currentLikes.filter(e => e !== email);

    const { error } = await supabase
        .from("climbingRoutes")
        .update({ likedBy: updatedLikes })
        .eq("id", id);

    if (!error) setLikedByUser(false);
        
    }


    const DeleteFromList = async (id) =>{
        const {data, error} = await  supabase.from("climbingRoutes").delete().eq("id", id);
        if(error){
            console.log("Error deleting list item");
        }
    }

    return(
        <div className="card_container">
            <h1>{props.name}</h1>
            <p>Grade: V{props.grade}</p>
            <Link to={`/details/${props.id}`}
                state={{description: props.description}}>
                Route in detail
            </Link>
            <br></br>
            {!isBoulderhal && !likedByUser && <button onClick={() => AddToLikeList(props.id)}>Like the route</button>}
            {!isBoulderhal && likedByUser && <button onClick={() => RemoveFromLikedList(props.id)}>Remove from liked list</button>}
            {isBoulderhal && <button onClick={() => DeleteFromList(props.id)}>Delete the route</button>}
        </div>
    );
}

export default RouteCard