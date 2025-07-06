// src/pages/ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Produkt nicht gefunden');
        return res.json();
      })
      .then(setProduct)
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p className="p-4 pt-24">Lade Produkt …</p>;

  return (
    <div className="max-w-3xl mx-auto p-4 pt-24">
      <img
        src={product.image || 'https://via.placeholder.com/600x400?text=Kein+Bild'}
        alt={product.name}
        className="w-full h-80 object-cover rounded-xl mb-4"
      />

      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-xl font-semibold mb-4">{product.price} €</p>

      {/* Hier zeigen wir jetzt die ausführliche Beschreibung */}
      <div className="prose prose-lg mb-6">
        <h2>Beschreibung</h2>
        <p>{product.description}</p>
      </div>

      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
      >
        🛒 In den Warenkorb
      </button>
    </div>
  );
}
