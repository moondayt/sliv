import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from "./Home";
import About from "./About";
import Catalog from "./Catalog";
import Store from "./Store";
import Registration from "./Registration"
import Login from "./Login";
import Product from "./Product"
import Cart from "./Cart"

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={ <Home/> }/>
      <Route exact path="/about" element={ <About/> }/>
      <Route exact path="/catalog" element={ <Catalog/> }/>
      <Route exact path="/store" element={ <Store/> }/>
      <Route exact path="/register" element={ <Registration/> }/>
      <Route exact path="/login" element={ <Login/> }/>
      <Route exact path="/product" element={ <Product/> }/>
      <Route exact path="/cart" element={ <Cart/> }/>
    </Routes>
  </Router>
)

export default App;
