import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // tài khoản giả
    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("isLogin", "true");
      window.location.href = "/dashboard";
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-3xl text-white font-bold mb-6 text-center">
          HRM Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition p-3 rounded-lg text-white font-semibold"
          >
            Login
          </button>
        </form>

        <p className="text-slate-400 text-sm mt-4 text-center">
          Demo account: <br />
          Email: admin@gmail.com <br />
          Password: 123456
        </p>
      </div>
    </div>
  );
}

export default Login;
