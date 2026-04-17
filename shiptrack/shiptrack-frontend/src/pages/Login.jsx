import { useState } from "react";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    try {
      await loginUser(data);
      localStorage.setItem("isLoggedIn", "true");

      toast.success("✅ Login Successful");
      navigate("/track");
    } catch {
      toast.error("❌ Invalid Credentials");
    }
  };

  return (
    <div className="relative h-screen w-full">
      {
       <h1 className="absolute top-6 left-10 text-blue-400 text-2xl font-bold z-10">
      🚚 ShipTrack
      </h1>
}

      {/* 🔥 BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
          alt="bg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* 🔥 LOGIN CARD */}
      <div className="relative flex items-center justify-center h-full">
        
        <div className="bg-black/60 backdrop-blur-lg p-8 rounded-xl w-96 text-white shadow-2xl">

          <h2 className="text-3xl font-bold mb-6 text-center">
            🚚 ShipTrack Login
          </h2>

          <input
            className="w-full p-3 mb-4 bg-gray-800 rounded outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />

          <input
            type="password"
            className="w-full p-3 mb-4 bg-gray-800 rounded outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded font-semibold transition"
            onClick={handleLogin}
          >
            Login
          </button>

          <p className="text-sm mt-4 text-center text-gray-300">
            New user?{" "}
            <span
              className="text-blue-400 cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register here
            </span>
          </p>

        </div>

      </div>
    </div>
  );
}