import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";

import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
   
   children:[
    {
        path:"/",
        element:<Home></Home>
    }
   ]
}
  ]);

  export default router