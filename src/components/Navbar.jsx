import React from "react";
import { Link } from "react-router-dom";
import { IoBasketOutline, IoHomeSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((store) => store.counter.cartValue);
  return (
    <>
      <nav>
        <Link to="/cart">
          <div className="right-navbar">
            <IoBasketOutline />
            <span className="notif">{cart.length}</span>
          </div>
        </Link>
        <Link to="/">
          <IoHomeSharp />
        </Link>
      </nav>
      <div className="products"></div>
    </>
  );
}

export default Navbar;
