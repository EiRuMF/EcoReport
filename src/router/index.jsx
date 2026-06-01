import { createBrowserRouter } from "react-router-dom";
// Layout
import MainLayout from "@/layout/MainLayout";
import BlankLayout from "@/layout/BlankLayout";
import AdminLayout from "@/layout/AdminLayout";

// Pages
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import ForgotPassword from "@/pages/Auth/ForgotPassword";
import LandingPage from "@/pages/LandingPages/LandingPage";
import Form from "@/pages/Form";
import ProfilePage from "@/pages/Profile/ProfilePage";
import History from "@/pages/History/index";

// Admin
import HomeAdmin from "@/pages/Admin/Home/Index";

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
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/profile", element: <ProfilePage /> },
    ],
  },

  {
    element: <MainLayout />,
    children: [
      { path: "/form", element: <Form /> },
      { path: "/history", element: <History /> },
    ],
  },

  //Admin
  {
    element: <AdminLayout />,
    children: [
      { path: "/admin", element: <HomeAdmin /> },
      // { path: "/admin/data-laporan", element:  },
      // { path: "/admin/data-laporan/detail", element:  }
    ],
  },
]);
