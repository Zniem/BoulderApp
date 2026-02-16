import RouteCard from "./RouteCard.jsx"

function MainPage(){
    return(
    <>
        {/*Filled with test data for now this is gonna change to an API from a database*/}
        <RouteCard id="1" name="Route 1" grade="v2"></RouteCard>
        <RouteCard id="2" name="Route 2" grade="v7"></RouteCard>
        <RouteCard id="3" name="Route 3" grade="v1"></RouteCard>
        <RouteCard id="4" name="Route 4" grade="v4"></RouteCard>
    </>
    );
}

export default MainPage