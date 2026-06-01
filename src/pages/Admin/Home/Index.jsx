import { useState } from "react";
import { PanelLeft } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import Card from "./Card";
import Backgroundshort from "@/components/backgroundshort";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-full">
      <Sidebar isOpen={sidebarOpen} />

      <div className="flex flex-col overflow-hidden">
        {/* Topbar dengan toggle button */}
        <div className="flex items-center gap-2 px-4 py-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-5 border border-black rounded-lg hover:bg-neutral-800 text-white hover:text-white"
          >
            <PanelLeft size={18} />
          </button>
        </div>

        {/* Konten utama */}
        <div className="flex-1 flex flex-col items-center justify-center gap-8">
          <Backgroundshort />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Index;
