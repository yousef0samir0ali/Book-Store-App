import "./cart.css";

import OrderSummary from "./OrderSummary";
import CartItem from "./CartItem";
import { useContext, useEffect } from "react";
import cartContext from "../../context/cartContext";
export default function Cart() {
  let { cartItems } = useContext(cartContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let totalPrice = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );

  return (
    <div className="cart">
      <div className="cart-title">Your Shopping Cart</div>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>
        <OrderSummary totalPrice={totalPrice} />
      </div>
    </div>
  );
}
