import React from "react";
import './product.css';

export const Product=(props)=>{
    const {product_name,product_image,product_price,product_desc}=props;
    return(
        <div>
            <div className="product_container">
                <div className="product_title">{product_name}</div>
                <div className="product_image">
                    <img src={product_image}/>
                </div>
                <div className="product_price">{product_price}</div>
                <div className="product_desc">{product_desc}</div>
                <div className="button_container">
                    <div className="buy_now">Buy Now</div>
                </div>
            </div>
        </div>
    )
}