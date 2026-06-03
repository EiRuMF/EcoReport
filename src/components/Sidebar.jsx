import { useState } from "react";
import {
  LayoutDashboard,
  ChartPie,
  Map,
  MoreHorizontal,
  Box,
  BookOpen,
  Settings2,
  ChevronsUpDown,
  ChevronRight,
  PanelLeft, 
  Building,
} from "lucide-react";

const navItems = [
  { icon: Box, label: "Models", hasArrow: true },
  { icon: BookOpen, label: "Documentation", hasArrow: true },
  { icon: Settings2, label: "Settings", hasArrow: true },
];

const projects = [
  { icon: LayoutDashboard, label: "Design Engineering" },
  { icon: ChartPie, label: "Sales & Marketing" },
  { icon: Map, label: "Travel" },
  { icon: MoreHorizontal, label: "More" },
];

export function Sidebar({ isOpen }) {
  return (
    <aside
      className={`flex flex-col bg-neutral-900 border-r border-neutral-800 transition-all duration-200 overflow-hidden ${
        isOpen ? "w-60 min-w-[240px]" : "w-0 min-w-0"
      }`}
    >
      <div className="w-60 flex flex-col h-full p-2">
        {/* Org Switcher */}
        <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-neutral-800 w-full text-left">
          <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center flex-shrink-0">
            <Building size={16} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white">Acme Inc</p>
            <p className="text-xs text-neutral-400">Enterprise</p>
          </div>
          <ChevronsUpDown size={14} className="text-neutral-500" />
        </button>

        {/* Nav Items */}
        <div className="mt-1 space-y-0.5">
          {navItems.map(({ icon: Icon, label, hasArrow }) => (
            <button
              key={label}
              className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm text-neutral-400 hover:bg-neutral-800 hover:text-white w-full"
            >
              <Icon size={16} />
              <span className="flex-1 text-left">{label}</span>
              {hasArrow && <ChevronRight size={14} />}
            </button>
          ))}
        </div>

        {/* Projects */}
        <p className="text-xs text-neutral-500 font-medium px-2.5 pt-4 pb-1 uppercase tracking-wide">
          Projects
        </p>
        <div className="space-y-0.5">
          {projects.map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm text-neutral-400 hover:bg-neutral-800 hover:text-white w-full"
            >
              <Icon size={16} />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* User Footer */}
        <div className="mt-auto pt-2 border-t border-neutral-800">
          <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-neutral-800 w-full">
            <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-xs font-medium text-white flex-shrink-0">
              S
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p className="text-sm font-medium text-white">shadcn</p>
              <p className="text-xs text-neutral-400 truncate">m@example.com</p>
            </div>
            <ChevronsUpDown size={14} className="text-neutral-500" />
          </button>
        </div>
      </div>
    </aside>
  );
}
