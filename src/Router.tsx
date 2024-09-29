import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/Home";
import HomeLayout from "./layouts/HomeLayout";
import PricingPage from "./pages/Pricing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutPage from "./pages/About";
import AuthLayout from "./layouts/AuthLayout";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "pricing",
        element: <PricingPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/auth/login" />,
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      }
    ]
  }
]);


export default router
