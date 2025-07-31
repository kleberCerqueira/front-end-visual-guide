import { useState } from "react";
import OpenSidebarButton from "./OpenSidebarButton";
import CloseSidebarButton from "./CloseSidebarButton";

const Sidebar = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <>
      {sideBarOpen ? (
        <div className="fixed inset-0 bg-black/50 transition-transform duration-300">
          <nav className="h-screen w-4/5 bg-white overflow-y-auto">
            <header className="flex items-center justify-between border-b-2 border-gray-300 p-4 sticky top-0 bg-white z-1">
              <h2 className="text-xl font-semibold">Menu de guias</h2>
              <CloseSidebarButton onClick={() => setSideBarOpen(false)} />
            </header>
            <div className="p-4 mb-15">{children}</div>
          </nav>
        </div>
      ) : (
        <OpenSidebarButton onClick={() => setSideBarOpen(true)} />
      )}
    </>
  );
};

export default Sidebar;
