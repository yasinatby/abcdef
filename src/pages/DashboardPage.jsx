import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function DashboardPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get('/api/orders/me', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setOrders(data);
      } catch (err) {
        setError('Fehler beim Laden der Bestellungen');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString('de-DE');

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Meine Bestellungen</h1>

      {loading && <p>Lade Bestellungen...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && orders.length === 0 && (
        <p>Du hast noch keine Bestellungen aufgegeben.</p>
      )}

      {!loading && !error && orders.length > 0 && (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order._id} className="border p-4 rounded shadow">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">Bestellnummer: {order._id}</h2>
                <span className="text-sm text-gray-500">{formatDate(order.createdAt)}</span>
              </div>
              <div className="mt-2">
                <p>Status: <span className="font-medium">{order.status}</span></p>
                <p>Gesamtbetrag: {order.total.toFixed(2)} €</p>
              </div>
              <ul className="mt-4 space-y-2">
                {order.items.map((item, index) => (
                  <li key={index} className="text-sm">
                    {item.quantity}x {item.name} ({item.price.toFixed(2)} € pro Stück)
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 