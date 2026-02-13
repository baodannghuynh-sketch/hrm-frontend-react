import { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";

function Employees() {
  const [employees, setEmployees] = useState([]);

  // load dữ liệu khi vào trang
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(data);
  }, []);

  // xóa nhân viên
  const deleteEmployee = (index) => {
    const newList = [...employees];
    newList.splice(index, 1);

    setEmployees(newList);
    localStorage.setItem("employees", JSON.stringify(newList));
  };

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Employees</h1>

        <a
          href="/add-employee"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          + Add Employee
        </a>
      </div>

      <div className="bg-white rounded-xl shadow">
        <table className="w-full">
          <thead className="bg-slate-200">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Position</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center p-5">
                  No employees yet
                </td>
              </tr>
            ) : (
              employees.map((emp, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3">{emp.name}</td>
                  <td className="p-3">{emp.email}</td>
                  <td className="p-3">{emp.position}</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => deleteEmployee(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}

export default Employees;
