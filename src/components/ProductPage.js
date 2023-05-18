import React from 'react';

const ProductPage = ({ match }) => {
  const productId = match.params.id;

  return (
    <div>
      <h2>Сторінка продукту</h2>
      <p>Ідентифікатор продукту: {productId}</p>
    </div>
  );
};

export default ProductPage;
