import React from 'react';

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Ціна: {product.price}</p>
      <p>Категорія: {product.category}</p>
      <button onClick={() => onAddToCart(product)}>Додати у корзину</button>
    </div>
  );
};

export default ProductItem;
