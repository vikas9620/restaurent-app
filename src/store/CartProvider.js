import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  
  const addItemToCartHandler = (item) => {
    setCartItems((prevCartItems) => {
      const existingCartItemIndex = prevCartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (existingCartItemIndex !== -1) {
        const updatedCartItems = [...prevCartItems];
        const existingCartItem = updatedCartItems[existingCartItemIndex];

        const updatedCartItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + item.amount,
        };
        updatedCartItems[existingCartItemIndex] = updatedCartItem;
        return updatedCartItems;
      } else {
        return [...prevCartItems, item];
      }
    });
  };

  const removeItemFromCartHandler = (id) => {};
  const cartContext = {
    items: cartItems,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
