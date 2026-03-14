import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { RiDashboardLine } from "react-icons/ri";
import { BiSolidDashboard } from "react-icons/bi";
import { FaPix } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";

export default function SideBar() {
  const { isSidebarExpanded } = useContext(SidebarContext);

  return (
    <ul className="p-4 px-2 space-y-2">
      <li className="p-2 hover:bg-white/10 rounded">
        {isSidebarExpanded ? "Dashboard" : <BiSolidDashboard size={20} />}
      </li>

      <li className="p-2 hover:bg-white/10 rounded">
        {isSidebarExpanded ? "Transações" : <GrTransaction size={20} />}
      </li>

      <li className="p-2 hover:bg-white/10 rounded">
        {isSidebarExpanded ? "Pix" : <FaPix size={20} />}
      </li>

      <li className="p-2 hover:bg-white/10 rounded">
        {isSidebarExpanded ? "Receber" : <GiReceiveMoney size={20} />}
      </li>
    </ul>
  );
}
