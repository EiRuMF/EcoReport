import { Outlet } from "react-router-dom";

function BlankLayout() {
  return (
    <main className="min-h-screen w-screen flex items-center justify-center bg-gray-800">
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
        <Outlet />
      </div>
    </main>
  );
}

export default BlankLayout;
