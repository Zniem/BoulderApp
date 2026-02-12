import './routecard.css'
function RouteCard(){
    return(
        <div className="card_container">
            <img className="card_image" src="https://picsum.photos/seed/picsum/512/500" alt="Photo of route"></img>
            <h1>Card Title</h1>
            <p>This is the card description Please add more information to this</p>
            <a href="cardPage">Route in detail</a>
        </div>
    );

}

export default RouteCard