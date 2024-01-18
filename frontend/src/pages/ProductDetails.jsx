import React from "react";
import { useParams } from "react-router-dom";

import PropTypes from "prop-types";

function ProductDetails({ products }) {
  const { id } = useParams();
  const { nom, descriptionLongue, image, ingredients } = products.find(
    (product) => product.id.toString() === id
  );
  return (
    <div className="productDetails">
      <img src={image} alt={nom} />
      <div className="text">
        {" "}
        <h1>{nom}</h1>
        <p className="desc">{descriptionLongue}</p>
        <p className="ing">{ingredients}</p>
        <button type="button">Ajouter au panier</button>

      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ProductDetails;
