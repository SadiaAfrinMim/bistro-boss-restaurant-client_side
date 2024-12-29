import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from "./Router/Router";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-7xl mx-auto">
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
