import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function OrderConfirmationPage() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('lastOrder');
    if (stored) {
      setOrder(JSON.parse(stored));
      // Option: Nach der Anzeige localStorage leeren
      localStorage.removeItem('lastOrder');
    }
  }, []);

  if (!order) {
    return (
      <div className="pt-24 text-center px-4">
        <h1 className="text-2xl font-bold mb-4">🛒 Keine Bestellung gefunden</h1>
        <p className="mb-4 text-gray-600">Du hast aktuell keine offene Bestellung.</p>
        <Link to="/shop" className="text-blue-600 underline">Zurück zum Shop</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto pt-24 px-4">
      <h1 className="text-3xl font-bold mb-4 text-center">🎉 Vielen Dank für deine Bestellung!</h1>
      <p className="text-center text-gray-600 mb-6">Deine Bestellnummer:</p>
      <div className="text-center font-mono text-lg bg-gray-100 p-2 rounded mb-8">
        {order.id}
      </div>

      <div className="space-y-4">
        {order.items.map(({ product, quantity }, i) => (
          <div key={i} className="border p-4 rounded shadow-sm flex justify-between items-center">
            <div>
              <h2 className="font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">{quantity} × € {product.price}</p>
            </div>
            <p className="text-sm font-medium">€ {(quantity * product.price).toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div className="text-right mt-6 text-xl font-bold">
        Gesamt: € {order.total.toFixed(2)}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/shop"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Weiter einkaufen
        </Link>
      </div>
    </div>
  );
}
