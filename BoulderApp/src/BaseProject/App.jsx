import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"

import MainPage from "../MainPage/MainPage.jsx"
import TopNavBar from "./TopNavBar.jsx"
import RouteDetails from '../MainPage/RouteDetails.jsx'
import LoginPage from '../LoginPage/LoginPage.jsx'
import ClimbedPage from '../ClimbedPage/ClimbedPage.jsx'

//layout function for the browser router otherwhise it doesnt work
function Layout(){
  return(
    <>
      <TopNavBar/>
      <Outlet/>
    </>
  );

}

//routing the app
const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
  {index:true,element:<MainPage/>},
  {path:"/details/:id",element:<RouteDetails/>},
  {path:"/loginPage",element:<LoginPage/>},
  {path:"/climbed",element:<ClimbedPage/>},
    ],
  },
]);

//main app function
function App() {
  return(
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App
