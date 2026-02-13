import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white fixed left-0 top-0 p-5">
      <h2 className="text-2xl font-bold mb-10 text-blue-400">
        HRM System
      </h2>

      <nav className="space-y-4">
        <Link
          to="/dashboard"
          className="block p-3 rounded-lg hover:bg-slate-700"
        >
          Dashboard
        </Link>

        <Link
          to="/employees"
          className="block p-3 rounded-lg hover:bg-slate-700"
        >
          Employees
        </Link>

        <Link
          to="/profile"
          className="block p-3 rounded-lg hover:bg-slate-700"
        >
          About Me
        </Link>

        <button
          className="block p-3 rounded-lg hover:bg-red-600 w-full text-left mt-10"
          onClick={() => {
            localStorage.removeItem("isLogin");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;
