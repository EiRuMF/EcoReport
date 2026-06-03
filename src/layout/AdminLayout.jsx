import { Outlet } from "react-router-dom";
import blankbg from "@/assets/blankbg.webp";

function BlankLayout() {
  return (
    <main className="min-h-screen w-screen flex items-center justify-center bg-[#2563EB]">
      <Outlet />
    </main>
  );
}

export default BlankLayout;
