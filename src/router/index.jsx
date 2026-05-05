import { createBrowserRouter } from "react-router-dom";
// Layout
import MainLayout from "@/layout/MainLayout";
import BlankLayout from "@/layout/BlankLayout";

// Pages
import Login from "@/pages/Auth/Login";

export const router = createBrowserRouter([
  {
    element: <BlankLayout />,
    children: [{ path: "/login", element: <Login /> }],
  },
]);
