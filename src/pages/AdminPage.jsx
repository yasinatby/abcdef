import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import AdminDashboard from '../components/AdminDashboard';

const categories = ['Smartphones', 'Tablets', 'Zubehör'];

export default function AdminPage() {
  const navigate = useNavigate();

  // ✅ Zugriffsschutz
  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (!isAdmin) {
      navigate('/login'); // Weiterleitung, falls nicht berechtigt
    }
  }, [navigate]);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState(false);

  const { addProduct } = useProducts();

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImages]);
  };

  const handleImageRemove = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const moveImage = (from, to) => {
    const updated = [...images];
    const [moved] = updated.splice(from, 1);
    updated.splice(to, 0, moved);
    setImages(updated);
  };

  const handleSubmit = () => {
    const parsedPrice = parseFloat(price);
    if (!name || isNaN(parsedPrice) || parsedPrice < 0) {
      alert('Bitte gültige Produktdaten eingeben.');
      return;
    }

    const product = {
      name,
      price: parsedPrice,
      description,
      categories: selectedCategories,
      image: images[0]?.preview || '',
    };

    try {
      addProduct(product);
      alert('✅ Produkt erfolgreich gespeichert!');
      setName('');
      setPrice('');
      setDescription('');
      setSelectedCategories([]);
      setImages([]);
      setPreview(false);
    } catch (error) {
      console.error('Fehler beim Speichern:', error);
      alert('❌ Fehler beim Speichern des Produkts.');
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 pt-24 space-y-12">
      <h1 className="text-3xl font-bold mb-4">🛠️ Adminbereich</h1>

      <div className="bg-gray-50 rounded-xl shadow p-4">
        <AdminDashboard />
      </div>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h2 className="text-2xl font-semibold">Produkt hinzufügen</h2>

        <input
          className="w-full border px-3 py-2 rounded"
          placeholder="Produktname"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full border px-3 py-2 rounded"
          placeholder="Preis in €"
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="w-full border px-3 py-2 rounded"
          placeholder="Beschreibung"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div>
          <h3 className="font-semibold mb-2">Kategorien</h3>
          {categories.map((cat) => (
            <label key={cat} className="block">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="mr-2"
              />
              {cat}
            </label>
          ))}
        </div>

        <div>
          <h3 className="font-semibold mb-2">Bilder hochladen</h3>
          <input type="file" accept="image/*" multiple onChange={handleImageChange} />
          <div className="flex flex-wrap gap-4 mt-4">
            {images.map((img, index) => (
              <div key={index} className="relative w-24 h-24">
                <img
                  src={img.preview}
                  alt={`Bild ${index + 1}`}
                  className="w-full h-full object-cover rounded"
                />
                <button
                  onClick={() => handleImageRemove(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-xs"
                >
                  ✕
                </button>
                <div className="flex justify-between mt-1 text-xs">
                  {index > 0 && <button onClick={() => moveImage(index, index - 1)}>⬆</button>}
                  {index < images.length - 1 && <button onClick={() => moveImage(index, index + 1)}>⬇</button>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setPreview(true)}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Vorschau
          </button>
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Veröffentlichen
          </button>
        </div>
      </div>

      {preview && (
        <div className="mt-6 p-4 bg-gray-100 rounded-xl border">
          <h2 className="text-xl font-semibold mb-2">Vorschau:</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Preis:</strong> {price} €</p>
          <p><strong>Beschreibung:</strong> {description}</p>
          <p><strong>Kategorien:</strong> {selectedCategories.join(', ')}</p>
          <div className="flex gap-2 mt-2">
            {images.map((img, i) => (
              <img
                key={i}
                src={img.preview}
                alt={`Vorschau ${i + 1}`}
                className="w-24 h-24 object-cover rounded"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
