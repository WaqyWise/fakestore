import React from 'react';

const CartPage = () => {
  const cartItems = [
    { id: 1, name: 'Product 1', quantity: 2, price: 10 },
    { id: 2, name: 'Product 2', quantity: 1, price: 15 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div>
      <h1>Сторінка корзини</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>Кількість: {item.quantity}</p>
            <p>Ціна: {item.price}</p>
          </li>
        ))}
      </ul>
      <h2>Загальна вартість: {total}</h2>
    </div>
  );
};

export default CartPage;