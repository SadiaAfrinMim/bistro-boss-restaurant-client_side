import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from "./Router/Router";
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from "./provider/AuthProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
   <HelmetProvider>
    <div className="max-w-screen-xl mx-auto">
    <RouterProvider router={router} />
    </div>
    </HelmetProvider>
   </AuthProvider>
  </React.StrictMode>
);
