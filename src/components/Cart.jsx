import React from "react";
import Navbar from "./Navbar";
import formatCurrency from "../utils";
import { useDispatch, useSelector } from "react-redux";
import {RemoveProduct, decrementProduct, incrementProduct} from "../Redux/features/counter/counterSlice";

function Cart() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  const addition = (acc , carrentValue) =>{
    return acc + carrentValue.price * carrentValue.qty;
  }

  const total = store.counter.cartValue.reduce(addition , 0)

  return (
    <>
      <Navbar />
      <div className="cart">
        {store.counter.cartValue &&
          store.counter.cartValue.map((item) => {
            
            return (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt="" />
                <div className="cart-item-text">
                  <div className="cart-item-info">
                    <h4>{item.title}</h4>
                    <h5>قیمت : {formatCurrency(item.price)}</h5>
                    <h5>مجموع قیمت : {formatCurrency(item.price * item.qty)}</h5>
                    <button onClick={() => dispatch(RemoveProduct(item))}>حذف محصول از سبد خرید</button>
                  </div>  
                  <div className="add-to-cart">
                    <button onClick={() => dispatch(incrementProduct(item))}>+</button>
                    <span>تعداد : {item.qty}</span>
                    <button onClick={() => dispatch(decrementProduct(item))}>-</button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

          <div className="total">
            <p>
              {
                total != 0 ? <>مجموع قیمت : {formatCurrency(total)}</> : <>محصولی در سبد خرید وجود ندارد</> 
              }
            </p>
          </div>

    </>
  );
}

export default Cart;
