import React from "react";
import { useParams } from "react-router-dom";

import PropTypes from "prop-types";

function ProductDetails({ products }) {
  const { id } = useParams();
  const { nom, description, prix, image } = products.find(
    (product) => product.id.toString() === id
  );
  return (
    <div>
      <img src={image} alt={nom} />
      <h1>{nom}</h1>
      <p>{description}</p>
      <p>{prix} €</p>
    </div>
  );
}

ProductDetails.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ProductDetails;
