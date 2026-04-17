import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

// 🔥 Glass Toast Function
const showGlassToast = () => {
  toast(
    ({ closeToast }) => (
      <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-xl rounded-xl p-4 flex items-start gap-3 text-white">
        
        {/* ICON */}
        <div className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center">
          ⚠️
        </div>

        {/* TEXT */}
        <div className="flex-1">
          <h3 className="font-bold text-lg">Access Denied</h3>
          <p className="text-sm">Please login first</p>
        </div>

        {/* CLOSE */}
        <button onClick={closeToast} className="text-white text-lg">✖</button>
      </div>
    ),
    {
      position: "top-right",
      autoClose: 2500,
      closeButton: false,
      hideProgressBar: true,
    }
  );
};

export default function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    showGlassToast();   // ✅ CALL HERE
    return <Navigate to="/" replace />;
  }

  return children;
}