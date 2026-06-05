import React from "react";
import { Button } from "@/components/ui/button";

const EditProfile = ({
  editName,
  setEditName,
  handleUpdateProfile,
  isSaving,
  isLoading,
}) => {
  return (
    <div className="w-full text-left">
      <h3 className="text-sm font-extrabold text-gray-800 mb-3">
        Ubah Username
      </h3>
      <div className="flex gap-3">
        <input
          type="text"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          className="flex-1 bg-[#F8FAFC] border border-gray-100 rounded-xl px-4 py-4 text-sm font-bold text-gray-700 focus:outline-none focus:border-blue-500 transition-colors text-left"
        />
        <Button
          onClick={handleUpdateProfile}
          disabled={isSaving || isLoading}
          className={`text-white font-bold py-6.5 px-8 rounded-xl text-sm transition-colors ${
            isSaving ? "bg-gray-400" : "bg-[#1E293B] hover:bg-black"
          }`}
        >
          {isSaving ? "Menyimpan..." : "Simpan"}
        </Button>
      </div>
    </div>
  );
};

export default EditProfile;
