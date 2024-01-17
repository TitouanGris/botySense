import React from "react";
import ProductCard from "../components/ProductCard"; // Créez ce composant séparément

function Home() {
  // Exemple de données de produits (à remplacer par une intégration avec une API)
  const products = [
    { id: 1, name: "Crème hydratante", price: 19.99, image: "cream.jpg" },
    {
      id: 2,
      name: "Shampooing nourrissant",
      price: 12.99,
      image: "shampoo.jpg",
    },
    {
      id: 3,
      name: "Masque facial revitalisant",
      price: 24.99,
      image: "mask.jpg",
    },
  ];

  return (
    <div>
      <h1>Bienvenue sur notre site de cosmétiques</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
