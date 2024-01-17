import React from "react";
import PropTypes from "prop-types";

function ProductCard({ product }) {
  const { name, price, image } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="product-details">
        <h2>{name}</h2>
        <p>{`Prix: $${price.toFixed(2)}`}</p>
        <button type="button">Ajouter au panier</button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
