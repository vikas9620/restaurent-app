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
      // Find the index of the item to be removed
      const itemIndex = prevCartItems.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        // Remove the item from the cart
        const updatedCartItems = [...prevCartItems];
        updatedCartItems.splice(itemIndex, 1);
        return updatedCartItems;
      }

      return prevCartItems;
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
