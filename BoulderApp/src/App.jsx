import {createBrowserRouter, RouterProvider} from "react-router-dom"

import MainPage from "./MainPage.jsx"
import TopNavBar from "./TopNavBar.jsx"
import RouteDetails from './RouteDetails.jsx'

//routing the app
const router = createBrowserRouter([
  {path:"/",element:<MainPage/>},
  {path:"/details/:id",element:<RouteDetails/>},
])

//main app function
function App() {
  return(
    <>
      <TopNavBar></TopNavBar>
      <div className="div_test">
        <RouterProvider router={router}/>
      </div>
  </>
  );
}

export default App
