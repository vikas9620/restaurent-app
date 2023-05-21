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
        const itemWithDetails = {
          ...item,
          name: item.name,
          price: item.price,
        };
        return [...prevCartItems, itemWithDetails];
      }
    });
  };

  const removeItemFromCartHandler = (id) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: item.amount - 1,
          };
        }
        return item;
      });
  
      return updatedCartItems.filter((item) => item.amount > 0);
    });
  };
  
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
