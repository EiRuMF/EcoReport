import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar";

function BlankLayout() {
  return (
    <main className="min-h-screen w-screen flex flex-col items-center justify-start bg-[#2563EB]">
      <Navbar />
      <div className="flex w-full items-center justify-center">
        <Outlet />
      </div>
    </main>
  );
}

export default BlankLayout;
