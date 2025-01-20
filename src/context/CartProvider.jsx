import { useState } from "react";
import cartContext from "./cartContext";
import { toast } from "react-toastify";

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  //Add To Cart
  const addToCart = (item) => {
    const isExist = cartItems.find((cart) => cart.id === item.id);

    if (isExist) {
      //Update Item In Cart
      setCartItems(
        cartItems.map((cartItem) => (cartItem.id === item.id ? item : cartItem))
      );

      toast.success("The item was successfully updated in the cart");
    } else {
      setCartItems((prev) => [...prev, item]);

      toast.success("Successfully added to the cart");
    }
  };

  //Remove From Cart
  const removeFromCart = (id) => {
    let cart = cartItems.filter((c) => c.id !== id);
    setCartItems(cart);
    toast.success("The item was successfully removed from the cart");
  };

  return (
    <cartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        cartItemsLength: cartItems.length,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
