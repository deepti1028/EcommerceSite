import React from "react";
import "../index.css";
function NewsLetter() {
  return (
    <div className="newsletter">
      <h1>Get Exculsive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
