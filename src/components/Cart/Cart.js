import { useContext } from "react";
import CartContext from "../../store/cart-context";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const deleteHandler = (id) => {
    cartCtx.removeItem(id);
  };
  
  const hasItems = cartCtx.items.length > 0;
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {" "}
      {cartCtx.items.map((item) => (
        <li className={classes.meal} key={item.id}>
          <div>
            <h3>{item.name}</h3>
            <div className={classes.price}>{item.price.toFixed(2)}</div>
          </div>
          <span>X {item.amount}</span>
          <div>
            <button onClick={() => deleteHandler(item.id)}>-</button>
            <button>+</button>
          </div>
        </li>
      ))}{" "}
    </ul>
  );
  const price = cartCtx.items.reduce(
    (currPrice, item) => currPrice + item.price,
    0
  );
  const totalAmount = `$${price.toFixed(2)}`;

  console.log(cartCtx.items);
  return (
    <Modal onClose={props.onClose}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
