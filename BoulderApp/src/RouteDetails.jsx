import {useParams, useLocation} from "react-router-dom"

const RouteDetails = () => {
    const {id} = useParams(); 
    const location = useLocation();
    const { description } = location.state || {};
    return(
        <>
        <h1>These are the route details of route {id}</h1>
        <p>Desctription {description}</p>
        </>
    );
}

export default RouteDetails