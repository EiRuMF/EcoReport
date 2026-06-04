import { useState } from "react";
import { PanelLeft } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import Card from "./Card";
import Backgroundshort from "@/components/backgroundshort";
import Statistik from "./Statistik";
import Tabel from "../Laporan/Tabel";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex -h-screen w-full">
      <Sidebar isOpen={sidebarOpen} />

      <div className="flex flex-col overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-5 border border-black rounded-lg hover:bg-neutral-800 text-white hover:text-white"
          >
            <PanelLeft size={18} />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto z-10 px-6 pb-12 lg:px-10 sticky">
        <div className="absolute inset-0 pointer-events-none py-10 -z-10">
          <Backgroundshort />
        </div>

        <div className="relative z-10 w-full max-w-275 flex flex-col gap-8 justify-center items-center">
          <Card />
          <div className="mt-6 w-full">
            <Tabel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
