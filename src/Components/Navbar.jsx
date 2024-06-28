import React, { useEffect, useState } from "react";
import "./index.css";
import logo from "./Assets/logo.png";
import cart_icon from "./Assets/cart_icon.png";
function Navbar() {
  const [menu, setMenu] = useState("shop");
  const navbarItem = (item) => {
    console.log(item);
    return (
      <li onClick={() => setMenu(item)}>
        {item.charAt(0).toUpperCase() + item.slice(1)}
        <hr style={{ display: menu === item ? "block" : "none" }} />
      </li>
    );
  };
  const list = ["shop", "men", "women", "kids"];
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Site Logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">{list.map((item) => navbarItem(item))}</ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="Add to Cart" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
