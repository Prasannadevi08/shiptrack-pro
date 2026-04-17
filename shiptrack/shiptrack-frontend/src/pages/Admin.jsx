import { useState } from "react";
import { addShipment } from "../services/api";
import { toast } from "react-toastify";
import { updateShipment } from "../services/api";

// ✅ CLEAN GLASS TOAST (FIXED UI)
const showGlassToast = () => {
  toast(
    ({ closeToast }) => (
      <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-xl px-4 py-3 flex items-center gap-3 text-white w-[280px]">

        {/* ICON */}
        <div className="bg-green-500/80 rounded-full w-8 h-8 flex items-center justify-center text-sm">
          ✔
        </div>

        {/* TEXT */}
        <div className="flex-1">
          <p className="text-sm font-medium">Shipment Created 🚚</p>
          <p className="text-xs text-gray-300">Successfully added</p>
        </div>

        {/* CLOSE */}
        <button
          onClick={closeToast}
          className="text-gray-300 hover:text-white text-sm"
        >
          ✖
        </button>

      </div>
    ),
    {
      position: "top-right",
      autoClose: 2000,
      closeButton: false,
      hideProgressBar: true,
    }
  );
};

export default function Admin() {
  const [data, setData] = useState({
    trackingId: "",
    source: "",
    destination: "",
    status: "",
    currentLocation: ""
  });

  const handleSubmit = async () => {
    try {
      await addShipment(data);

      showGlassToast(); // ✅ SUCCESS TOAST

      // ✅ CLEAR FORM AFTER SUBMIT (NEW)
      setData({
        trackingId: "",
        source: "",
        destination: "",
        status: "",
        currentLocation: ""
      });

    } catch {
      toast.error("❌ Error creating shipment");
    }
  };

  return (
    <div className="relative min-h-screen">

      {/* 🌌 Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
          alt="bg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* 🛠️ Admin Form */}
      <div className="relative flex items-center justify-center min-h-screen">

        <div className="bg-black/60 backdrop-blur-lg p-8 rounded-xl w-96 text-white shadow-2xl text-center">

          <h2 className="text-2xl font-bold mb-6">🛠️ Admin Panel</h2>

          <input
            value={data.trackingId}
            className="w-full p-2 bg-gray-800 rounded mb-3 outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Tracking ID"
            onChange={(e)=>setData({...data, trackingId:e.target.value})}
          />

          <input
            value={data.source}
            className="w-full p-2 bg-gray-800 rounded mb-3 outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Source"
            onChange={(e)=>setData({...data, source:e.target.value})}
          />

          <input
            value={data.destination}
            className="w-full p-2 bg-gray-800 rounded mb-3 outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Destination"
            onChange={(e)=>setData({...data, destination:e.target.value})}
          />

          <select
            value={data.status}
            className="w-full p-2 bg-gray-800 rounded mb-3 outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e)=>setData({...data, status:e.target.value})}
          >
            <option value="">Select Status</option>
            <option value="PENDING">PENDING</option>
            <option value="DELIVERED">DELIVERED</option>
          </select>

          <input
            value={data.currentLocation}
            className="w-full p-2 bg-gray-800 rounded mb-4 outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Current Location"
            onChange={(e)=>setData({...data, currentLocation:e.target.value})}
          />

          <button
            className="w-full bg-green-500 hover:bg-green-600 p-2 rounded transition duration-300 hover:scale-105"
            onClick={handleSubmit}
          >
            Create Shipment
          </button>

        </div>
      </div>
    </div>
  );
}