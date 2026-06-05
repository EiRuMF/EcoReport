import React, { useState, useEffect } from "react";
import { FiLogOut } from "react-icons/fi";
import Backgroundshort from "@/components/backgroundshort.jsx";
import ProfileHeader from "./ProfileHeader";
import AccountInfo from "./AccountInfo";
import EditProfile from "./EditProfile";
import { useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import api from "@/api/axios";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    fullName: "Username",
    email: "Email@Email.com",
    phone: "+62********",
    joinedAt: "**-**-****",
    bio: "",
    profile_picture: "",
  });

  const [editBio, setEditBio] = useState("");
  const [editName, setEditName] = useState("");
  const [editPicture, setEditPicture] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const token = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${token}` };

        // Ambil data user (nama, email, phone, role)
        const meRes = await api.get("/api/auth/me", { headers });
        const me = meRes.data;

        // Ambil data profile (bio, foto)
        const profileRes = await api.get("/api/profile", { headers });
        const prof = profileRes.data;

        setProfile({
          fullName: me.name || "User",
          email: me.email || "-",
          phone: me.phone_number || "-",
          joinedAt: me.created_at
            ? new Date(me.created_at).toLocaleDateString("id-ID", {
                month: "long",
                year: "numeric",
              })
            : "-",
          bio: prof.bio || "",
          profile_picture: prof.profile_picture || "",
        });
        setEditBio(prof.bio || "");
      } catch (err) {
        console.error("Gagal fetch profile:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProfile();
  }, []);

  const handleUpdateProfile = async () => {
    setIsSaving(true);
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("bio", editBio);
      if (editPicture) formData.append("profile_picture", editPicture);

      await api.put("/api/profile", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setProfile((prev) => ({ ...prev, bio: editBio }));
      alert("Profil berhasil diperbarui!");
    } catch (err) {
      alert("Gagal memperbarui profil.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="relative flex-col min-h-screen w-full flex items-center justify-center pt-5 pb-12 px-6">
      <Backgroundshort />

      <div className="hidden md:flex max-w-64 mb-10 items-center gap-6 px-8 py-3 bg-white/10 backdrop-blur-md rounded-full shadow-sm text-sm font-semibold text-white border border-white/10">
        <a href="/admin" className="hover:text-[#F5A623] transition-colors">
          Beranda
        </a>
        <div className="w-px h-4 bg-white/30 mx-1"></div>
        <a
          href="/profile-admin"
          className="flex items-center gap-2 hover:text-[#F5A623] transition-colors"
        >
          <FiUser className="w-5 h-5" />
          Profile
        </a>
      </div>

      <div className="relative z-10 w-full max-w-137 bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col items-center border-0">
        {/* Header Profile */}
        <ProfileHeader fullName={profile.fullName} isLoading={isLoading} />

        <div className="w-full px-8 md:px-10 pb-8 flex flex-col gap-6 text-left">
          <AccountInfo
            email={profile.email}
            phone={profile.phone}
            joinedAt={profile.joinedAt}
          />

          <EditProfile
            editBio={editBio}
            setEditBio={setEditBio}
            setEditPicture={setEditPicture}
            handleUpdateProfile={handleUpdateProfile}
            isSaving={isSaving}
            isLoading={isLoading}
          />

          <hr className="border-gray-300 my-2" />

          {/* Tombol Logout */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 text-red-600 font-bold text-xl hover:text-red-700 transition-colors py-2"
          >
            <FiLogOut className="w-5 h-5" />
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
