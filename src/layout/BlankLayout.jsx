import { Outlet } from "react-router-dom";
import blankbg from "@/assets/blankbg.webp";

function BlankLayout() {
  return (
    <main
      className="min-h-screen w-screen flex items-center justify-center bg-[#2563EB]"
      // style={{ backgroundImage: `url(${blankbg})` }}
    >
      <Outlet />
    </main>
  );
}

export default BlankLayout;
