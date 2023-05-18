import React from "react";
import "./App.css";
import Button from "./UI/Button";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <React.Fragment>
      <div className="app-head">
        <h2>ReactMeals</h2>
        <Button>
          <FontAwesomeIcon icon={faShoppingCart} />
          Your Cart<div className="count">0</div>
        </Button>
      </div>
      <img src="/image.png" alt="Logo of my restaurant"  />
    </React.Fragment>
  );
}

export default App;
