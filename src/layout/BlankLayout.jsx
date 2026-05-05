import { Outlet } from "react-router-dom";

function BlankLayout() {
  return (
    <main className="min-h-screen w-screen flex items-center justify-center bg-gray-800">
      <Outlet />
    </main>
  );
}

export default BlankLayout;
