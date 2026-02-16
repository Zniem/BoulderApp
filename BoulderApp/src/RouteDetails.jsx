import {useParams} from "react-router-dom"

const RouteDetails = () => {
    const {id} = useParams(); 

    return(
        <h1>These are the route details of route {id}</h1>
    );
}

export default RouteDetails