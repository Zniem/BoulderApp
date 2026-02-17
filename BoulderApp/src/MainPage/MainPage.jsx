import {Link} from "react-router-dom";

import "./MainPage.css"

function MainPage(){
    return(
        <div className="central_text">
            <h1>Boulder App</h1>
            <p>This is an app for keeping track of your bouldering progress and the routes you have climbed</p>
            <div className="buttons">
                <Link to={`/loginPage`}>Log in</Link>
                <Link to={`/registerPage`}>Register</Link>
            </div>
        </div>
    );

}

export default MainPage