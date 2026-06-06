import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "@/components/ProtectedRoute";
// Layout
import MainLayout from "@/layout/MainLayout";
import BlankLayout from "@/layout/BlankLayout";
import AdminLayout from "@/layout/AdminLayout";

// Pages
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import ForgotPassword from "@/pages/Auth/ForgotPassword";
import LandingPage from "@/pages/LandingPages/LandingPage";

import ProfilePage from "@/pages/Profile/ProfilePage";
import EventPage from "@/pages/Event pages/EventPage";
import BlogPage from "@/pages/Blog Pages/BlogPage";

// Form Report
import Form from "@/pages/Form";
// History
import History from "@/pages/History/index";
import HistoryDetail from "@/pages/History/Detail";

// Admin
import HomeAdmin from "@/pages/Admin/Home/Index";
import AdminProfilePage from "@/pages/Admin/Profile/Profile";
import DetailLaporanAdmin from "@/pages/Admin/Laporan/DetailLaporan";

export const router = createBrowserRouter([
  // Public routes
  {
    element: <BlankLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
    ],
  },

  // User routes (harus login, role: user)
  {
    element: (
      <ProtectedRoute requiredRole="2">
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/event", element: <EventPage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/form", element: <Form /> },
      { path: "/history", element: <History /> },
      { path: "/history/:id", element: <HistoryDetail /> },
    ],
  },

  {
    element: (
      <ProtectedRoute requiredRole="1">
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/admin", element: <HomeAdmin /> },
      { path: "/profile-admin", element: <AdminProfilePage /> },
      { path: "/admin/laporan/:id", element: <DetailLaporanAdmin /> },
    ],
  },
]);
