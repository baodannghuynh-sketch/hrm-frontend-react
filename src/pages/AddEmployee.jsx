import { useState } from "react";
import MainLayout from "../layout/MainLayout";
export default AddEmployee;



function AddEmployee() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = { name, email, position };

    const oldData = JSON.parse(localStorage.getItem("employees")) || [];
    oldData.push(newEmployee);

    localStorage.setItem("employees", JSON.stringify(oldData));

    alert("Added successfully!");
    window.location.href = "/employees";
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Add Employee</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow w-96"
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 border rounded"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Position"
          className="w-full p-3 mb-4 border rounded"
          onChange={(e) => setPosition(e.target.value)}
          required
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Save
        </button>
        </form>
    </MainLayout>
    );
}
