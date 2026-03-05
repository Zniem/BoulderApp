import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"

import DashboardPage from "../DashboardPages/DashboardPage.jsx"
import TopNavBar from "./TopNavBar.jsx"
import RouteDetails from '../DashboardPages/RouteDetails.jsx'
import LoginPage from '../LoginPage/LoginPage.jsx'
import ClimbedPage from '../ClimbedPage/ClimbedPage.jsx'
import MainPage from "../MainPage/MainPage.jsx"
import RegisterPage from "../LoginPage/RegisterPage.jsx"
import AdminDashboardPage from "../DashboardPages/AdminDashboardPage.jsx"

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
  {path:"/dashboard",element:<DashboardPage/>},
  {path:"/adminDashboard",element:<AdminDashboardPage/>},
  {path:"/details/:id",element:<RouteDetails/>},
  {path:"/loginPage",element:<LoginPage/>},
  {path:"/registerPage",element:<RegisterPage/>},
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
