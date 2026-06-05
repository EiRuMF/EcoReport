import React, { useState, useEffect } from "react";
import { FiLogOut } from "react-icons/fi";
import Backgroundshort from "@/components/backgroundshort.jsx";
import ProfileHeader from "./ProfileHeader";
import AccountInfo from "./AccountInfo";
import EditProfile from "./EditProfile";

const ProfilePage = () => {
  // data profil
  const [profile, setProfile] = useState({
    fullName: "Username",
    email: "Email@Email.com",
    phone: "+62********",
    joinedAt: "**-**-****",
  });

  // input ubah data
  const [editName, setEditName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  // GET Profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8000/api/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProfile({
            fullName: data.fullName || "User Tidak Diketahui",
            email: data.email || "email@tidakditemukan.com",
            phone: data.phone || "Tidak ada nomor",
            joinedAt: data.createdAt
              ? new Date(data.createdAt).toLocaleDateString("id-ID", {
                  month: "long",
                  year: "numeric",
                })
              : "Tidak diketahui",
          });
          setEditName(data.fullName || "");
        } else {
          console.error("Gagal mengambil data profil. Token mungkin kedaluwarsa.");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // PUT Profile
  const handleUpdateProfile = async () => {
    if (!editName.trim()) return alert("Username tidak boleh kosong!");

    setIsSaving(true);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8000/api/profile", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: editName,
        }),
      });

      if (response.ok) {
        alert("Profil berhasil diperbarui!");
        setProfile((prev) => ({ ...prev, fullName: editName }));
      } else {
        alert("Gagal memperbarui profil. Cek kembali koneksi atau format data.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Terjadi kesalahan jaringan.");
    } finally {
      setIsSaving(false);
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center pt-5 pb-12 px-6">
      <Backgroundshort />

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
            editName={editName} 
            setEditName={setEditName} 
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