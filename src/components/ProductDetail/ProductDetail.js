import React from 'react';
import formatPrice from '../../commons/functions/formatPrice';
import './ProductDetail.scss';

const ProductDetail = ({ item }) => {
  const { picture, title, condition, sold_quantity, price, description } = item;

  const displayDecimals = price.decimals ? <span className={'info__price--decimals'}>{price.decimals}</span> : null;
  return (
    <article className="item">
      <div className={'item-detail'}>
        <div className={'item-detail__img'}>
          <img className="item-image" src={picture} alt={title} />
        </div>
        <div className={'item-detail__info'}>
          <div className={'info__condition'}>{`${condition === 'new' ? 'Nuevo' : 'Usado'} ${sold_quantity ? `- ${sold_quantity} vendidos` : ''}`}</div>
          <div className={'info__title'}>{title}</div>
          <div className={'info__price'}>
            {formatPrice(price)}
            {displayDecimals}
          </div>
          <button className={'info__button'} tabIndex="4 ">
            Comprar
          </button>
        </div>
      </div>
      <div className={'item-description'}>
        <div className={'item-description__title'}>Descripci&oacute;n del producto</div>
        <div className={'item-description__text'}>{description}</div>
      </div>
    </article>
  );
};

export default ProductDetail;
