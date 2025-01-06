import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";

import Home from "../Pages/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/signUp";
import Secret from "../SharedStyle/Secret/Secret";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Allusers from "../Pages/Dashboard/ALLuser/Allusers";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
   
   children:[
    {
        path:"/",
        element:<Home></Home>
    },
    {
      path:"/menu",
      element:<Menu></Menu>
    },
    {
      path:'/order/:category',
      element:<Order></Order>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:'/signup',
      element:<SignUp></SignUp>
    },
    {
      path:"/secret",
      element:<PrivateRoute><Secret></Secret></PrivateRoute>
    }
   ]
},
{
  path:'dashboard',
element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
children:[{
  path:'cart',
  element:<Cart></Cart>
},
// addmin routes
{
  path:'users',
  element:<Allusers></Allusers>
}
]
}
  ]);

  export default router