import {Link} from "react-router-dom";
import './routecard.css'

function RouteCard(props){
    return(
        <div className="card_container">
            <h1>{props.name}</h1>
            <p>Grade: {props.grade}</p>
            <Link to={`/details/${props.id}`}
                state={{description: props.description}}>
                Route in detail
            </Link>
            <br></br>
            <button>Like the route</button>
        </div>
    );
}

export default RouteCard