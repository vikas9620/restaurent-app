import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
    const cartCtx = useContext(CartContext);
    const addToCartHandler = (event) => {
        event.preventDefault();
    
        const amount = event.target.amount.value;
        const item = {
          id: props.id,
          name: props.name,
          price: props.price,
          amount: +amount,
        };
    
        cartCtx.addItem(item);
      };

  return (
    <form className={classes.form} onSubmit={addToCartHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button >+ Add</button>
    </form>
  );
};

export default MealItemForm;
