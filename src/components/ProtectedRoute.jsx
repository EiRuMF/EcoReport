import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import api from "@/api/axios";

const ProtectedRoute = ({ children, requiredRole }) => {
  const token = localStorage.getItem("token");
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [loading, setLoading] = useState(!localStorage.getItem("role"));

  useEffect(() => {
    if (!token || localStorage.getItem("role")) return;

    async function fetchMe() {
      try {
        const res = await api.get("/api/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const fetchedRole = String(res.data.role);
        localStorage.setItem("role", fetchedRole);
        setRole(fetchedRole);
      } catch (err) {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setRole(null);
      } finally {
        setLoading(false);
      }
    }
    fetchMe();
  }, []);

  if (!token) return <Navigate to="/login" replace />;
  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  if (!role) return <Navigate to="/login" replace />;

  if (requiredRole && role !== requiredRole) {
    return <Navigate to={role === "1" ? "/admin" : "/"} replace />;
  }

  return children;
};

export default ProtectedRoute;
