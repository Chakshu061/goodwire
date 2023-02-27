import React from 'react';
import './Header.css';
import GoodWire from "../../../images/GoodWire.png";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { BsShop }  from "react-icons/bs";
import  { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Container">
      <a href="/" className="logo">
          <img src={ GoodWire } alt="logo" />
      </a>
      <ul className="nav-links">
        <li><Link to="/products" className="products"><BsShop/></Link></li> 
        <li><Link to="/search" className="search"><FiSearch/></Link></li> 
        <li><Link to="/cart" className="cart"><FiShoppingCart /></Link> </li>
        <li><Link to="/login" className="login"><CgProfile /></Link></li> 
      </ul>
        
    </div>
  )
}

export default Header;