import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Data } from "../data";
import formatCurrency from "../utils";

import { useSelector, useDispatch } from "react-redux";
import { AddProduct } from "../Redux/features/counter/counterSlice";
// import { increment, selectCounter } from "../Redux/features/counter/counterSlice";

function Products() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div className="products">
        {Data &&
          Data.map((item) => {
            return (
              <div className="product-item" key={item.id}>
                <img src={item.image} alt="" />
                <div className="product-item-text">
                  <div className="product-item-info">
                    <h4>{item.title}</h4>
                    <h5>{formatCurrency(item.price)}</h5>
                  </div>
                  <div className="add-to-cart">
                    <button onClick={() => dispatch(AddProduct(item))}>افزودن به سبد خرید</button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Products;
