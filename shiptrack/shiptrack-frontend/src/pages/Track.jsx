import { useState } from "react";
import { trackShipment } from "../services/api";
import { toast } from "react-toastify";

export default function Track() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const handleTrack = async () => {
    try {
      const res = await trackShipment(id);
      setData(res.data);
    } catch {
      toast.error("❌ Shipment not found");
    }
  };

  return (
    <div className="relative min-h-screen">

      {/* 🌌 Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* 🔍 Card */}
      <div className="relative flex flex-col items-center justify-center min-h-screen text-white">

        <div className="bg-black/60 backdrop-blur-lg p-8 rounded-xl w-96 text-center shadow-2xl">

          <h2 className="text-2xl font-bold mb-4">📦 Track Shipment</h2>

          <input
            className="w-full p-3 mb-4 bg-gray-800 rounded outline-none"
            placeholder="Enter Tracking ID"
            onChange={(e) => setId(e.target.value)}
          />

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded"
            onClick={handleTrack}
          >
            Track
          </button>

          {data && (
            <div className="mt-4 text-left text-sm">
              <p><b>Status:</b> {data.status}</p>
              <p><b>From:</b> {data.source}</p>
              <p><b>To:</b> {data.destination}</p>
              <p><b>Location:</b> {data.currentLocation}</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}