import React,{useContext} from 'react';
import CartContext from '../store/cartcontext';
import './product.css';

export const Product = (props)=>{
    const cartCtx =useContext(CartContext);
    const buyNOwHandler =()=>{
      const  cartObject={
            product_name:props.productname,
            qty:1,
            product_price:props.productprice
        }
        let CartItems =[...cartCtx.cartItems];
        CartItems =CartItems.filter(cartItem=>cartItem.product_name ==props.product_name)
        if(CartItems.length>0){
            CartItems[0].qty=CartItems[0].qty+1
        }else{
            cartCtx.setCartItems([...cartCtx.cartItems,cartObject]);
        }
        console.log(cartCtx.cartItems);
    }
    return (
        <div>
            <div className="product_container">
                <div className="product_name">{props.pname}</div>
                <div className='product_image'>{props.pimage}
                    <img src={props.pimage}/>
                </div>
                <div className="product_price">{props.pprice}</div>
                <div className='button_container'>
                    <button className="buy_now" onClick={buyNOwHandler}>Buy Now</button>
                </div>

            </div>
        </div>
    )
}