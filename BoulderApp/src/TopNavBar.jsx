import {Link} from "react-router-dom";

import "./topNavBar.css"

function TopNavBar(){
    return(
        <div className="top_bar">
            <h2>Boulder app</h2>
            <div className="right_side">
            <Link to={`/`}>Home</Link>
            <Link to={`/climbed`}>Climbed</Link>
            <Link to={`/loginPage`}>Log In</Link>
            </div>
        </div>
    );
}

export default TopNavBar