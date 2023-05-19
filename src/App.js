import React, {Fragment} from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";


function App() {
  return (
    <Fragment>
      <Header />
      <main>
      <Meals />
      </main>
    </Fragment>
  );
}

export default App;
