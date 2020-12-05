import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProduct from "./AddProduct";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import OrderPlaced from "./OrderPlaced";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/addproduct">
            <Header />
            <AddProduct />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/orderplaced">
            <Header />
            <OrderPlaced />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
