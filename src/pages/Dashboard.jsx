import MainLayout from "../layout/MainLayout";

function Dashboard() {
  return (
    <MainLayout>
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="mt-4 text-gray-600">
        Chào mừng bạn đến hệ thống quản lý nhân sự.
      </p>
    </MainLayout>
  );
}

export default Dashboard;
