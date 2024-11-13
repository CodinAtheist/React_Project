import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [menu, setMenu] = useState('shop');

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Toy Store</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu('shop'); }}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu === 'shop' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('kids'); }}><Link style={{ textDecoration: 'none'}} to='/kids'>Kids</Link>{menu === 'kids' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('adults'); }}><Link style={{ textDecoration: 'none'}} to='/adults'>Adults</Link>{menu === 'adults' ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">3</div>
      </div>
    </div>
  );
};