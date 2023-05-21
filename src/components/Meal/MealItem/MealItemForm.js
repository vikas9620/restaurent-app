import { useRef } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const addToCartHandler = (event) => {
    event.preventDefault();

    const amount = amountInputRef.current.value;
    const amountNumber = +amount;

    props.onAddToCart(amountNumber);
  };

  return (
    <form className={classes.form} onSubmit={addToCartHandler}>
      <Input
        ref={amountInputRef}
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
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
