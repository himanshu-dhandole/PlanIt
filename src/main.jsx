import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout/Layout.jsx";// Import the custom Layout component
import Signup from "./components/Auth/Signup.jsx";
import Login from "./components/Auth/Login.jsx";
import Home from "./components/Home/Home.jsx";
import RoleSelection from "./components/RoleSelection/SelectRole.jsx";
import OrganizerSearchpage from "./components/Organizers/organizerSearchpage.jsx";
import Organizer from "./components/Organizers/organizer.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path:"/roles",
        element:<RoleSelection/>
      },
      {
        path:"/organizersearchpage",
        element:<OrganizerSearchpage/>
      },
      {
        path:"/organizer",
        element:<Organizer/>
      }
    ]
  },
  {
  path: "/login",
  element: <Login />
  },
  {
    path:"/signup",
    element: <Signup />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);