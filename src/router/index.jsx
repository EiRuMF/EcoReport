import { createBrowserRouter } from "react-router-dom";
// Layout
import MainLayout from "@/layout/MainLayout";
import BlankLayout from "@/layout/BlankLayout";

// Pages
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import ForgotPassword from "@/pages/Auth/ForgotPassword";
import LandingPage from "@/pages/Auth/LandingPage";

export const router = createBrowserRouter([
  { path: "/landing-page", element: <LandingPage /> },
  {
    element: <BlankLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
    
    ],
  },
]);
