// Starter Template mit Tailwind + Admin Panel + Shop Struktur
// Voraussetzung: create-react-app oder Next.js Projekt mit Tailwind

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

// Beispiel-Kategorien
const categories = ["Smartphones", "Tablets", "Zubehör"];

export default function AdminProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [preview, setPreview] = useState(false);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleSubmit = () => {
    const product = { name, price, description, categories: selectedCategories };
    console.log("Submit to DB:", product);
    // API call hier einbauen (z.B. POST /api/products)
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Produkt hinzufügen</h1>

      <Card>
        <CardContent className="space-y-4">
          <Input placeholder="Produktname" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Preis in €" value={price} onChange={(e) => setPrice(e.target.value)} />
          <Input placeholder="Beschreibung" value={description} onChange={(e) => setDescription(e.target.value)} />

          <div>
            <h2 className="font-semibold">Kategorien:</h2>
            {categories.map((cat) => (
              <label key={cat} className="flex items-center space-x-2">
                <Checkbox checked={selectedCategories.includes(cat)} onCheckedChange={() => toggleCategory(cat)} />
                <span>{cat}</span>
              </label>
            ))}
          </div>

          <div className="flex gap-2">
            <Button onClick={() => setPreview(true)}>Vorschau</Button>
            <Button onClick={handleSubmit}>Veröffentlichen</Button>
          </div>
        </CardContent>
      </Card>

      {preview && (
        <div className="mt-6 p-4 border rounded-xl shadow">
          <h2 className="text-xl font-semibold">Vorschau:</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Preis:</strong> {price} €</p>
          <p><strong>Beschreibung:</strong> {description}</p>
          <p><strong>Kategorien:</strong> {selectedCategories.join(", ")}</p>
        </div>
      )}
    </div>
  );
}
