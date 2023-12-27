import React from 'react';
import './ProductsList.scss';
import Product from './Product/Product';

const ProductsList = ({ items }) => {
  if (!items || items.length === 0) return <p className="products-list products-list--empty">No results available.</p>;

  return (
    <ol className="products-list">
      {items.map((item) => (
        <Product key={item.id} {...item} />
      ))}
    </ol>
  );
};

export default ProductsList;
