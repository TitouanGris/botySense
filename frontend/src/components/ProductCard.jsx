import React from "react";
import PropTypes from "prop-types";

function ProductCard({ product }) {
  const { nom, description, prix, image } = product;

  return (
    <div>
      <img src={image} alt={nom} />
      <h1>{nom}</h1>
      <p>{description}</p>
      <p>{prix} €</p>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ProductCard;
