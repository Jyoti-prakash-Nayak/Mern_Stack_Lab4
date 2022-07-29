import React, { useContext, useEffect } from 'react'
import { CartItem } from '../cart-item/cartitem';

import productContext from '../store/productContext';
export const Cart = () => {
    const productCtx = useContext(productContext);
    return (
        <div className='container'>
            <div className='cart-box mx-auto M-4'>
                {
                    productCtx.cartItems.map((item, index) =>
                        <CartItem product_name={item.product_name} product_price={item.product_price} qty
                            ={item.qty} key={index} />)}
            </div>

        </div>
    )
}