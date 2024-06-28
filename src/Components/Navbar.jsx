import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import logo from "./Assets/logo.png";
import cart_icon from "./Assets/cart_icon.png";
function Navbar() {
  const [menu, setMenu] = useState("shop");

  const list = ["shop", "men", "women", "kids"];
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Site Logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          <hr style={{ display: menu === "shop" ? "block" : "none" }} />
        </li>
        <li onClick={() => setMenu("men")}>
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>
          <hr style={{ display: menu === "men" ? "block" : "none" }} />
        </li>
        <li onClick={() => setMenu("women")}>
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>
          <hr style={{ display: menu === "women" ? "block" : "none" }} />
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          <hr style={{ display: menu === "kids" ? "block" : "none" }} />
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none" }} to="/login">
          <button>Login</button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart_icon} alt="Add to Cart" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
