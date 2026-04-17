import { useEffect, useState } from "react";
import { getDashboard } from "../services/api";

export default function Dashboard() {
  const [data, setData] = useState({ total: 0, delivered: 0, pending: 0 });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getDashboard();
    setData(res.data);
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

      {/* 📊 Dashboard */}
      <div className="relative flex justify-center items-center min-h-screen text-white">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* 📦 TOTAL */}
          <div className="bg-black/60 backdrop-blur-lg p-6 rounded-xl text-center shadow-xl transform transition duration-300 hover:scale-110 hover:shadow-blue-500/50">
            <div className="text-4xl mb-2">📦</div>
            <h2 className="text-lg">Total Shipments</h2>
            <p className="text-3xl text-blue-400 font-bold">{data.total}</p>
          </div>

          {/* 🚚 DELIVERED */}
          <div className="bg-black/60 backdrop-blur-lg p-6 rounded-xl text-center shadow-xl transform transition duration-300 hover:scale-110 hover:shadow-green-500/50">
            <div className="text-4xl mb-2">🚚</div>
            <h2 className="text-lg">Delivered</h2>
            <p className="text-3xl text-green-400 font-bold">{data.delivered}</p>
          </div>

          {/* ⏳ PENDING */}
          <div className="bg-black/60 backdrop-blur-lg p-6 rounded-xl text-center shadow-xl transform transition duration-300 hover:scale-110 hover:shadow-red-500/50">
            <div className="text-4xl mb-2">⏳</div>
            <h2 className="text-lg">Pending</h2>
            <p className="text-3xl text-red-400 font-bold">{data.pending}</p>
          </div>

        </div>
      </div>
    </div>
  );
}