import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProductCard from "../components/ProductCard";

function Shampooings({ products }) {
  return (
    <div>
      {products.map((product) => (
        <Link key={product.id} to={`/Products/${product.id}`}>
          <ProductCard product={product} key={product.id} />
        </Link>
      ))}
    </div>
  );
}

Shampooings.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Shampooings;
