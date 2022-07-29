import React, { useEffect } from 'react'
//import { Product } from '../Product';
//import {ProductForm} from './ProductForm';
import { useState } from 'react';
import { useContext } from 'react';
//import { Link } from 'react-router-dom';
import productContext from "../store/productContext";



export const Productlist = (props) => {
    
    const [products,setProduct] =useState([
        {
          product_name:"Apple Watch Series 7",
          product_image:"https://m.media-amazon.com/images/I/71SFsTBSJgL._SX679_.jpg",
          product_price:"27,990",
        },
        {
          product_name:"Apple MacBook Pro",
          product_image:"https://m.media-amazon.com/images/I/61Y30DpqRVL._SX679_.jpg",
          product_price:"2,18,999",
        },
        {
          product_name:"Apple iPhone 13 Pro",
          product_image:"https://m.media-amazon.com/images/I/61jLiCovxVL._SX679_.jpg",
          product_price:"1,13,600",
        },
      ]);
    {
       const productCtx = useContext(productContext)
       useEffect(() => {
        getProducts();
    }, [productCtx.products])
    const getProducts = async () => {
        const data = await fetch("http://localhost:4001/product/")
        const products_data = await data.json();
        console.log(products_data);
       productCtx.setProduct([...products_data, ...products_data.products]);
    }
    }

    return (
        <div>

            <div>
                <u><h1>{props.children}</h1></u>
                {props.list.map((product, index) =>
                    <product key={index} pname={product.product_name}
                        pimage={product.product_image}
                        pprice={'₹' + product.product_price} />
                )}
            </div>
        </div >
    )
}