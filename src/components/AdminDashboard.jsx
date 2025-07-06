import { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token'); // oder aus context

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const statsRes = await axios.get('/api/dashboard/stats', config);
        const productsRes = await axios.get('/api/dashboard/top-products', config);

        setStats(statsRes.data);
        setTopProducts(productsRes.data);
      } catch (error) {
        console.error('Dashboard-Fehler:', error);
      }
    };

    fetchData();
  }, []);

  if (!stats) return <div className="p-4">Lade Dashboard...</div>;

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Admin-Dashboard</h1>

      {/* Kennzahlen */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card label="Bestellungen" value={stats.totalOrders} />
        <Card label="Umsatz (€)" value={stats.totalRevenue.toFixed(2)} />
        <Card label="Verkaufte Artikel" value={stats.totalItemsSold} />
        <Card label="Kunden" value={stats.uniqueCustomers} />
      </div>

      {/* Top-Produkte */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Top-Produkte</h2>
        <Bar
          data={{
            labels: topProducts.map(p => p.name),
            datasets: [
              {
                label: 'Verkäufe',
                data: topProducts.map(p => p.quantity),
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

function Card({ label, value }) {
  return (
    <div className="bg-white shadow rounded-xl p-4 text-center border">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  );
}
