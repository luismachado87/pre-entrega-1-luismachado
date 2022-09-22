import React from 'react';
import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Cart from './Cart';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <>
    <CartProvider>
    <Navbar/>
    <Home/>
    <Cart/>
    </CartProvider>
    </>
  );
}

export default App;
