import React, { Fragment } from "react";
import dinner from "../../assets/image.png";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        
      </header>
     
      <div className={classes["main-image"]}>
        <img src={dinner} alt="dine in" ></img>
        
      </div>  
     
    </Fragment>
  );
};
export default Header;
