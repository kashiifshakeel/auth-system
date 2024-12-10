import Contacts from "./pages/contacts/Contacts";
import Home from "./pages/home/Home";
import Layout from "./pages/Layout";
import { createBrowserRouter } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";

export let myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile/>
      },
      {
        path: "/admin",
        element: <Profile/>
      },
    ],
  },
]);
