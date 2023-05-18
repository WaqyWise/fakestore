import React from 'react';
import "/Users/Worker/fakestore/src/components/HeaderSet/Header.css"

const Header = () => {
  return (
    <header >
      <div className='container-header'>
        <h1 className='logo'>Logo</h1>
        <nav>
            <div className='link-container'>
              <div className='header-components'><a href="/">Shop</a></div>
              <div className='header-components'><a href="/products">Products</a></div>
              <div className='header-components'><a href="/contact">Contact</a></div>
              </div> 
        </nav>
            <div className='cart-header'><a href="/cart">Корзина</a></div>
      </div>
    </header>
  );
};

export default Header;
