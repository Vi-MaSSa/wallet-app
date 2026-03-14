import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { ReactNode, useState, JSX } from "react";
import SideBar from "./Sidebar";
import { SidebarContext } from "../context/SidebarContext";

interface SidebarProps {
  children: ReactNode;
}

export default function SidebarContainer({
  children,
}: SidebarProps): JSX.Element {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => setSidebarExpanded((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ isSidebarExpanded }}>
      <div className="flex min-h-screen">
        <aside
          className={`
            overflow-hidden
            backdrop-blur-md
            border-r border-white/10
            transition-all duration-300

            fixed md:relative
            top-0 left-0
            h-screen
            z-40

            ${isSidebarExpanded ? "w-64" : "w-0 md:w-16"}

            flex flex-col

          `}
        >
          <div
            className={`
              flex items-center
              ${isSidebarExpanded ? "justify-between p-4" : "justify-center py-3"}
              min-w-0
            `}
          >
            {isSidebarExpanded && (
              <h1 className="text-lg font-bold whitespace-nowrap">Menu</h1>
            )}

            <button
              onClick={toggleSidebar}
              className="p-2 rounded hover:bg-white/10 flex items-center justify-center"
              type="button"
              aria-label="Toggle sidebar"
            >
              {isSidebarExpanded ? (
                <FaChevronLeft size={20} className="text-white" />
              ) : (
                <FaChevronRight size={20} className="text-white" />
              )}
            </button>
          </div>

          <div className="overflow-hidden flex-1 min-w-0">
            <SideBar />
          </div>
        </aside>

        <main className="flex-1 flex justify-center items-start w-full min-h-screen p-4 md:p-10">
          {children}
        </main>
      </div>
    </SidebarContext.Provider>
  );
}
