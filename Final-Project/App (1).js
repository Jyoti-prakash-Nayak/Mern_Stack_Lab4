//import { Product } from './components/product/Product';
import ProductForm from './components/product-form/ProductForm';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Cart } from './components/cart/Cart';
import Login from "./components/admin/Login";
import  {Productlist}  from './components/product-list/productlist';
import { ProductState } from './components/store/productstate';
import { dbConn } from './components/config/db';
//import { Navbar } from './components/navbar/navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

dbConn();
function App() {
  
  
  return (
    <div className="App">

<nav className="navbar navbar-expand-lg bg-light">

<div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>


        </ul>
        <div className='p-4'>
            <div className='row'>
                <div className='col-md-4 fs-6 cart-box text-center'>
                </div>
                <div className='col-md-8'>
                    <img src="https://www.freeiconspng.com/uploads/basket-cart-icon-27.png" width="45" alt="basket cart icon"className='cart-img'/>
                </div>
            </div>
        </div>
    </div>
</div>


</nav>
     
        

    <ProductState>
        <Routes>
        <Route path="/" element={< Productlist />} />
          <Route path="/product/add" element={<ProductForm />} />
          <Route path="/cart" element={< Cart />} />
          <Route path="/admin/Login" element={<Login />} />
        </Routes>
        </ProductState>
        
    </div>
  )
}
export default App;
