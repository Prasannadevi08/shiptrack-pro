import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="absolute top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 px-10 py-4 flex justify-between items-center">

      {/* 🚚 LOGO */}
      <h1
        className="text-white text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/track")}
      >
        🚚 ShipTrack
      </h1>

      {/* 🔗 NAV LINKS */}
      <div className="flex gap-6 items-center text-white font-medium">

        <span
          className="cursor-pointer hover:text-blue-400 transition"
          onClick={() => navigate("/track")}
        >
          Track
        </span>

        <span
          className="cursor-pointer hover:text-blue-400 transition"
          onClick={() => navigate("/admin")}
        >
          Admin
        </span>

        <span
          className="cursor-pointer hover:text-blue-400 transition"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </span>

        {/* 🔴 LOGOUT BUTTON */}
        <button
          className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded transition"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>
    </div>
  );
}