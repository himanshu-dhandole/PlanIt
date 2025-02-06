import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout/Layout.jsx"; // Import the custom Layout component
import Signup from "./components/Auth/Signup.jsx";
import Login from "./components/Auth/Login.jsx";
import Home from "./components/Home/Home.jsx";
import RoleSelection from "./components/RoleSelection/SelectRole.jsx";
import OrganizerSearchpage from "./components/Organizers/organizerSearchpage.jsx";
import Organizer from "./components/Organizers/organizer.jsx";
import ServiceSelection from "./components/ServiceProviders/SelectServicePage.jsx";
import CaterersSearchPage from "./components/ServiceProviders/CaterersPage.jsx";
import OrganizerDashboard from "./components/Organizers/OrganizerDashboard.jsx";
import DecoratorsPage from "./components/ServiceProviders/DecoratorsPage.jsx";
import EntertainmentPage from "./components/ServiceProviders/EntertainmentPage.jsx";
import SecurityPage from "./components/ServiceProviders/SecurityPage.jsx";
import ChatInteractions from "./components/ChatInteractions/ChatInteractions.jsx";
import HostProfile from "./components/Host/HostProfile.jsx";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx";
import Logout from "./components/Auth/Logout.jsx";
import CatererProfile from "./components/ServiceProviders/CatererProfile.jsx";
import DecoratorProfile from "./components/ServiceProviders/DecoratorProfile.jsx";
import EntertainmentProfile from "./components/ServiceProviders/EntertainmentProfile.jsx";
import SecurityProfile from "./components/ServiceProviders/SecurityProfile.jsx";
import ParticipantProfile from "./components/Participant/ParticipantProfile.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/roles",
        element: <RoleSelection />,
      },
      {
        path: "/organizersearchpage",
        element: <OrganizerSearchpage />,
      },
      {
        path: "/organizer",
        element: <Organizer />,
      },
      {
        path: "/serviceproviders",
        element: <ServiceSelection />,
      },
      {
        path: "/services/caterers",
        element: <CaterersSearchPage />,
      },
      {
        path: "/services/decorators",
        element: <DecoratorsPage />,
      },
      {
        path: "/services/entertainment",
        element: <EntertainmentPage />,
      },
      {
        path: "/services/security",
        element: <SecurityPage/>,
      },
      {
        path: "/organizerdashboard",
        element: <OrganizerDashboard />,
      },
      {
        path: "/chat",
        element: <ChatInteractions/>,
      },
      {
        path:"/hostprofile",
        element:<HostProfile/>,
      },
      {
        path:"/admin",
        element:<AdminDashboard/>
      },
      {
        path:"/catererprofile/:catererId",
        element:<CatererProfile/>
      },
      {
        path:"/decoratorprofile/:decoratorId",
        element:<DecoratorProfile/>
      },
      {
        path:"/entertainmentprofile/:entertainmentId",
        element:<EntertainmentProfile/>
      },
      {
        path:"/securityprofile/:securityId",
        element:<SecurityProfile/>
      },
      {
      path:"/profile",
        element:<ParticipantProfile/>
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },{
    path:"/logout",
    element:<Logout/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
