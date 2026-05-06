import { createBrowserRouter } from "react-router-dom";
// Layout
import MainLayout from "@/layout/MainLayout";
import BlankLayout from "@/layout/BlankLayout";

// Pages
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import ForgotPassword from "@/pages/Auth/ForgotPassword";

export const router = createBrowserRouter([
  {
    element: <BlankLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/forgot-password", element: <ForgotPassword /> }
    ],
  },
]);
