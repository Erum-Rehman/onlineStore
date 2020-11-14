import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import MainNavbar from './components/MainNavbar';
import Cart from './components/cart';
import Contact from "./components/Contact";
import ProductsContextProvider, { ProductsContext } from "./components/ProductsContext";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/Products";
// import Categories from "./components/Categories";
import Found from './components/Found';
import Login from './components/Login';
import CartContextProvider from './components/CartContext'
const App = () => {
  return (
    <>
    <div>
    <ProductsContextProvider>
      
      <CartContextProvider>
      
        <Router>
        <MainNavbar />
          <Switch>
            <Route path="/" exact component={Products}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/cart" exact component={Cart}/>
            <Route path="/login"  exact component={Login}/>
            <Route component={Found}/>
            
          </Switch>
        </Router>
      </CartContextProvider>
     </ProductsContextProvider>
      </div>
    </>
  );
}   
export default App;       
          
          
        
       
      
     
      
        


