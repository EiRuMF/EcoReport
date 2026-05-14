import { createBrowserRouter } from "react-router-dom";
// Layout
import MainLayout from "@/layout/MainLayout";
import BlankLayout from "@/layout/BlankLayout";

// Pages
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import ForgotPassword from "@/pages/Auth/ForgotPassword";
import LandingPage from "@/pages/LandingPages/LandingPage";
import Form from "@/pages/Form";
import History from "@/pages/History/index";

export const router = createBrowserRouter([
  {
    element: <BlankLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
    ],
  },

  {
    element: <MainLayout />,
    children: [{ path: "/", element: <LandingPage /> }],
  },

  {
    element: <MainLayout />,
    children: [
      { path: "/form", element: <Form /> },
      { path: "/history", element: <History /> },
    ],
  },
]);
