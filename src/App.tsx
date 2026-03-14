import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-slate-900 dark:via-zinc-900 dark:to-black">
      <Outlet />
    </div>
  );
}
