import "./topNavBar.css"

function TopNavBar(){
    return(
        <div className="top_bar">
            <h2>Boulder app</h2>
            <div className="right_side">
            <a href="">Home</a>
            <a href="">Climbed</a>
            <a href="">About</a>
            <a href="">Log in</a>
            </div>
        </div>
    );
}

export default TopNavBar