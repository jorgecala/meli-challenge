import React from 'react';
import { Link } from 'react-router-dom';
import formatPrice from '../../../commons/functions/formatPrice';
import './Product.scss';

const Product = ({ id, title, picture, price, free_shipping, condition }) => {
  const displayDecimals = price.decimals ? <span className="product-detail__price--decimals">{price.decimals}</span> : null;
  const shippingLabel = free_shipping ? <span className="product-detail__shipping"></span> : null;
  const conditionLabel = condition === 'new' ? 'Nuevo' : 'Usado';
  return (
    <li className="product-item">
      <Link to={{ pathname: `/items/${id}` }}>
        <img className="product-image" src={picture} alt={title} />
      </Link>
      <div className="product-detail">
        <div className="product-detail__price">
          {formatPrice(price)}
          {displayDecimals}
          <span className=""></span>
          {shippingLabel}
        </div>
        <Link className="product-detail__title" to={{ pathname: `/items/${id}` }}>
          {title}
        </Link>
      </div>
      <p className="product-condition">{conditionLabel}</p>
    </li>
  );
};

export default Product;
