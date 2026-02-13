import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full min-h-screen bg-slate-100 p-8">
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
