import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProductCard from "../components/ProductCard";

function Coloration({ products }) {
  return (
    <div className="productPages">
      {products
        .filter((product) => product.categorie === "Coloration")
        .map((product) => (
          <Link key={product.id} to={`/Products/${product.id}`}>
            <ProductCard product={product} key={product.id} />
          </Link>
        ))}
    </div>
  );
}

Coloration.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Coloration;
