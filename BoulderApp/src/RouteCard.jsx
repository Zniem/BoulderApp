import {Link} from "react-router-dom";
import './routecard.css'

function RouteCard(props){
    return(
        <div className="card_container">
            <img className="card_image" src="https://picsum.photos/seed/picsum/512/500" alt="Photo of route"></img>
            <h1>{props.name}</h1>
            <p>Grade: {props.grade}</p>
            <Link to={`/details/${props.id}`}>
                <a>Route in detail</a>
            </Link>
        </div>
    );
}

export default RouteCard